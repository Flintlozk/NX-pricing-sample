import {
  CommonTypeDefs,
  PriceTypeDefs,
} from '@pricing-sample-nx/shared-models';
import { commonResolver } from '../controllers/common/common.controller';
import { merge } from 'lodash';
import { priceResolver } from '../controllers/price/price.controller';

export const typeDefs = [CommonTypeDefs, PriceTypeDefs];
export const resolvers = merge(commonResolver, priceResolver);
