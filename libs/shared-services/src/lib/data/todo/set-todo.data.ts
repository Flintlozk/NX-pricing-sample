import { ITodoInput } from '@pricing-sample-nx/shared-models';
import { todoSchemaModel as TodoModel } from '@pricing-sample-nx/shared-mongo-lib';

export const addTodo = (todo: ITodoInput) => {
  return new Promise((resolve, reject) => {
    console.log(todo);
    TodoModel.create(todo)
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};
