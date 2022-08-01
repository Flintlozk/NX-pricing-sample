import {
  CommonTypeDefs,
  PriceTypeDefs,
  ProductTypeDefs,
} from '@pricing-sample-nx/shared-models';
import { commonResolver } from '../controllers/common/common.controller';
import { merge } from 'lodash';
import { priceResolver } from '../controllers/price/price.controller';
import { productResolver } from '../controllers/product/product.controller';

export const typeDefs = [CommonTypeDefs, PriceTypeDefs, ProductTypeDefs];
export const resolvers = merge(commonResolver, priceResolver, productResolver);
