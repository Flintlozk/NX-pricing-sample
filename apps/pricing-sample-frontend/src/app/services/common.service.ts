import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ISampleModel } from '@pricing-sample-nx/shared-models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public apollo: Apollo) {}

  GET_SAMPLE_QUERY = gql`
    query getSample($id: String) {
      getSample(id: $id) {
        no
        name
      }
    }
  `;

  getSample(id: string): Observable<any> {
    return this.apollo
      .query<{ getSample: ISampleModel }>({
        query: this.GET_SAMPLE_QUERY,
        fetchPolicy: 'no-cache',
        variables: { id },
      })
      .pipe(map((x) => x.data['getSample']));
  }
}
