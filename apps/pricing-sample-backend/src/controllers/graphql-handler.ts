import { IGraphQLContext } from '@pricing-sample-nx/shared-models';
import { graphQLErrorHandler } from './graphql-error-handler';

export const graphQLHandler = (params: { handler: any, validator: any; }) =>
  async (parent: any, args: any, context: any) => {
    try {
      const returnValue = await params.handler(
        parent,
        args,
        context as IGraphQLContext
      );
      const validate = await params.validator(returnValue);
      return validate;
    } catch (err) {
      console.log('err ::::::::::>>> ', err);
      graphQLErrorHandler(err);
    }
  };
