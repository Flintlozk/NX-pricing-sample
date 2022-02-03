import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { ITodo } from '@pricing-sample-nx/shared-models';

export const todoSchemaModel = mongoose?.model<ITodo & Document>(
    'todolist',
    new Schema(
      {
        todo: String,
      },
      { timestamps: true }
    )
  );
  
  