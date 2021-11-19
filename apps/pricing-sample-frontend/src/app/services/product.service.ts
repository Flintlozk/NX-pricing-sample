import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IGetPriceInput,
  IGetPriceResponse,
} from '@pricing-sample-nx/shared-models';
import { GET_PRICE_QUERY } from './query/price.query';

@Injectable()
export class ProductService {
  constructor(public apollo: Apollo) {}

  getPrice(input: IGetPriceInput): Observable<IGetPriceResponse> {
    return this.apollo
      .query<{ getPrice: IGetPriceResponse }>({
        query: GET_PRICE_QUERY,
        fetchPolicy: 'no-cache',
        variables: { input },
      })
      .pipe(map((x) => x.data['getPrice']));
  }
}
