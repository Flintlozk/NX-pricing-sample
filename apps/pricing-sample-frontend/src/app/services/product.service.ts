import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  IAddProductResponse,
  IGetPriceInput,
  IGetPriceResponse,
} from '@pricing-sample-nx/shared-models';
import { ADD_PRODUCT_MUTATE, GET_PRICE_QUERY } from './query/price.query';

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

  //kam
  addProduct(name:string,quantity:number,price:number):Observable<any> {
    return this.apollo.mutate<{addProduct:IAddProductResponse}>({
      mutation: ADD_PRODUCT_MUTATE,
      fetchPolicy: 'no-cache',
      variables: { name,quantity:Number(quantity),price:Number(price)},
    })
    // .pipe(map((x) => x.data['addProduct']))
  }
}

// Service -> Pipeline => [Mapping , Trasform] -> Return (Subscribe)
