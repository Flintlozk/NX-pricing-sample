import { CommonTypeDefs } from '@pricing-sample-nx/shared-models';
import { commonResolver } from '../controllers/common/common.controller';
import { merge } from 'lodash';

export const typeDefs = [CommonTypeDefs];
export const resolvers = merge(commonResolver);
