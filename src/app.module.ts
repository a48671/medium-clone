import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import ormconfig from '@app/ormconfig';
import { TagModule } from '@app/tag/tag.module';
import { ArticleModule } from '@app/arcticle/article.module';
import { AuthMiddlewares } from '@app/user/middlewares/auth.middlewares';
import { UserModule } from '@app/user/user.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from '@app/user/guards/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TagModule,
    UserModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddlewares).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    });
  }
}
