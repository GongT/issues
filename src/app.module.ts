import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { testSchema } from './app.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest', {
      connectionName: 'dogs',
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest', {
      connectionName: 'cats', // <<-- work if no this line
    }),
    MongooseModule.forFeature([{ name: 'test', schema: testSchema }], 'cats'), // <<-- work if no last arg
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
