import { ExpressRequestInterface } from '@app/types/express-request.interface';
import { UserEntity } from '@app/user/dto/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (key: string, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();

    if (!request.user) {
      return null;
    }

    if (key) {
      return request.user[key];
    }

    return request.user;
  },
);
