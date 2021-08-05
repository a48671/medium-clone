import { UserEntity } from '@app/user/dto/user.entity';
import { Request } from 'express';

export interface ExpressRequestInterface extends Request {
  user: UserEntity;
}
