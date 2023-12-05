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

  @Get('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User | null> {
    const user = await this.dbService.findUser(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
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
  ): Promise<PostSchema> {
    return this.dbService.createPost(title, body, user);
  }

  @Get('posts')
  async findPosts(): Promise<PostSchema[]> {
    return this.dbService.findPosts();
  }
}
