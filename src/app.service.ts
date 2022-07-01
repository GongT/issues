import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DBTest } from './app.model';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    // @InjectModel('catsConnection/test') // <<-- And this magically works
    @InjectModel('test')
    private readonly test: Model<DBTest>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
