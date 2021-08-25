import { ArticleController } from '@app/arcticle/article.controller';
import { ArticleEntity } from '@app/arcticle/article.entity';
import { ArticleService } from '@app/arcticle/article.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
