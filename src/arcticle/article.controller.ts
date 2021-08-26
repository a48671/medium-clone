import { ArticleService } from '@app/arcticle/article.service';
import { CreateArticleDto } from '@app/arcticle/dto/create-article.dto';
import { ArticleResponseInterface } from '@app/arcticle/types/article-response.interface';
import { User } from '@app/user/decorators/user.decorater';
import { UserEntity } from '@app/user/dto/user.entity';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @User() currentUser: UserEntity,
    @Body('article') createArticleDto: CreateArticleDto
  ): Promise<ArticleResponseInterface> {
    const article = await this.articleService.create(
      currentUser,
      createArticleDto
    );
    return this.articleService.buildArticleResponse(article);
  }
}
