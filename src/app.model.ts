import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'test', timestamps: true })
export class DBTest {
  @Prop({ required: true })
  field: string;
}

export const testSchema = SchemaFactory.createForClass(DBTest);
