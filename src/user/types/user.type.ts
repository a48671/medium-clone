import { UserEntity } from '@app/user/dto/user.entity';

export type UserType = Omit<UserEntity, 'hashPassword'>;
