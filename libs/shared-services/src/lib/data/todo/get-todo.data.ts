import { ITodo } from '@pricing-sample-nx/shared-models';
import { todoSchemaModel as TodoModel } from '@pricing-sample-nx/shared-mongo-lib';

export const getItemByCode = async (code: string): Promise<ITodo> => {
  const todo = await TodoModel.findOne({ code: code }).lean().exec();

  return todo as ITodo;
};
