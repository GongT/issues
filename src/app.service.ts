import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DBTest } from './app.model';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('test')
    private readonly modelsRunsModel: Model<DBTest>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
