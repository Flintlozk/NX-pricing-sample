import {
  CommonTypeDefs,
  PriceTypeDefs,
  ProductTypeDefs
} from '@pricing-sample-nx/shared-models';

import { merge } from 'lodash';

import { commonResolver } from '../controllers/common/common.controller';
import { productResolver } from '../controllers/product/product.controller'
import { priceResolver } from '../controllers/price/price.controller';

export const typeDefs = [CommonTypeDefs, PriceTypeDefs,ProductTypeDefs];

export const resolvers = merge(commonResolver, priceResolver,productResolver);
