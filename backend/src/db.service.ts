import { Injectable } from '@nestjs/common';
import { InjectModel, SchemaFactory } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { Post } from './schemas/post.schema';

export const UserModel = SchemaFactory.createForClass(User);
export const PostModel = SchemaFactory.createForClass(Post);

@Injectable()
export class DbService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async findUser(username: string): Promise<User | null> {
    console.log(username);
    return this.userModel.findOne({ username }).exec();
  }

  async loginUser(username: string, password: string): Promise<User | null> {
    const user = await this.findUser(username);
    if (user && user.password === password) {
      return user;
    } else {
      throw new Error('User does not exist');
    }
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = new this.userModel({ username, password });
    if (await this.findUser(username)) {
      throw new Error('User already exists');
    }
    return user.save();
  }

  async createPost(title: string, body: string, user: User): Promise<Post> {
    const post = new this.postModel({
      title,
      body,
      user: this.findUser(user.username),
      timestamp: new Date(),
    });
    return post.save();
  }

  async findPosts(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
