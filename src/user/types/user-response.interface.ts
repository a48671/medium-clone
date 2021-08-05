import { UserType } from '@app/user/types/user.type';

export interface UserResponseInterface {
  user: {
    token: string;
  } & UserType;
}
