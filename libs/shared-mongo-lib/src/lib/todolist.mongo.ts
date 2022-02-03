import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IProduct } from '@pricing-sample-nx/shared-models';

export const todolistSchemaModel = mongoose?.model<IProduct & Document>(
    'todolist',
    new Schema(
      {
        todo: String,
      },
      { timestamps: true }
    )
  );
  
  