import { ITodo } from '@pricing-sample-nx/shared-models';
import { todoSchemaModel as TodoModel } from '@pricing-sample-nx/shared-mongo-lib';

export const addTodo = (product: ITodo) => {
  return new Promise((resolve, reject) => {
    console.log(product);
    
    TodoModel.create(product)
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};
