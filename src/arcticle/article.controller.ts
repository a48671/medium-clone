import { ArticleService } from '@app/arcticle/article.service';
import { CreateArticleDto } from '@app/arcticle/dto/create-article.dto';
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
  ): Promise<any> {
    return this.articleService.create(currentUser, createArticleDto);
  }
}
