import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  user: User;

  @Prop()
  timestamp: Date;

  @Prop()
  link: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
