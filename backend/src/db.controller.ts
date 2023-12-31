import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DbService } from './db.service';
import { User } from './schemas/user.schema';
import { Post as PostSchema } from './schemas/post.schema';

@Controller('db')
export class DbController {
  constructor(private readonly dbService: DbService) {}

  @Get('users/:username')
  async findUser(@Param('username') username: string): Promise<User | null> {
    return this.dbService.findUser(username);
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User | null> {
    return this.dbService.loginUser(username, password);
  }

  @Post('users')
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.dbService.createUser(username, password);
  }

  @Post('posts')
  async createPost(
    @Body('title') title: string,
    @Body('body') body: string,
    @Body('user') user: User,
    @Body('link') link: string,
  ): Promise<PostSchema> {
    return this.dbService.createPost(title, body, user, link);
  }

  @Get('posts')
  async findPosts(): Promise<PostSchema[]> {
    return this.dbService.findPosts();
  }
}
