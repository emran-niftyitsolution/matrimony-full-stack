import { PickType } from '@nestjs/mapped-types';
import { User } from '../../user/user.schema';

export class RegisterDto extends PickType(User, [
  'username',
  'email',
  'password',
] as const) {}

export class LoginDto extends PickType(User, ['email', 'password'] as const) {}
