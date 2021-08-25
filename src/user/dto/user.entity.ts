import { ArticleEntity } from '@app/arcticle/article.entity';
import { Column, BeforeInsert, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => ArticleEntity, (article: ArticleEntity) => article.author)
  articles: Array<ArticleEntity>;
}
