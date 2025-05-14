import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { User, UserDocument } from '../user/user.schema';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/auth.dto';

interface JwtPayload {
  email: string;
  sub: string;
}

interface LoginResponse {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: User): Promise<UserDocument> {
    const hashedPassword = await argon2.hash(user.password);
    const newUser = { ...user, password: hashedPassword };
    return this.userService.create(newUser);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserDocument | null> {
    const users = await this.userService.findAll();
    const user = users.find((u) => u.email === email);
    if (user && (await argon2.verify(user.password, password))) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      email: user.email,
      sub: user._id.toString(),
    };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
