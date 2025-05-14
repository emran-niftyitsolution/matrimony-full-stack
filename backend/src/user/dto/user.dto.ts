import { PickType } from '@nestjs/mapped-types';
import { User } from '../user.schema';

export class CreateUserDto extends PickType(User, [
  'username',
  'email',
  'password',
] as const) {}

export class UpdateUserDto extends PickType(User, [
  'username',
  'email',
  'password',
] as const) {}
