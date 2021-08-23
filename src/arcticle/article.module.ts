import { ArticleController } from '@app/arcticle/article.controller';
import { ArticleService } from '@app/arcticle/article.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
