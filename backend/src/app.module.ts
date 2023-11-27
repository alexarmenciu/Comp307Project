import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DbController } from './db.controller';
import { DbService, UserModel, PostModel } from './db.service';
import { User } from './schemas/user.schema';
import { Post } from './schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          uri: 'mongodb+srv://alexarmenciu:4f7E-HXbtH~M8_i@comp307.naaydos.mongodb.net/?retryWrites=true&w=majority',
        };
      },
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserModel },
      { name: Post.name, schema: PostModel },
    ]),
  ],
  controllers: [AppController, DbController],
  providers: [AppService, DbService],
})
export class AppModule {}
