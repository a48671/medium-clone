import { ArticleEntity } from '@app/arcticle/article.entity';
import { CreateArticleDto } from '@app/arcticle/dto/create-article.dto';
import { UserEntity } from '@app/user/dto/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}
  async create(
    currentUser: UserEntity,
    createArticleDto: CreateArticleDto
  ): Promise<ArticleEntity> {
    const article = new ArticleEntity();
    Object.assign(article, createArticleDto);

    if (!article.tagList) {
      article.tagList = [];
    }

    article.slag = 'slag';
    article.author = currentUser;

    return await this.articleRepository.save(article);
  }
}
