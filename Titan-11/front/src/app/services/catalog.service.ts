import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ConsumeService } from './consume.service';
import { Endpoints } from 'src/environments/endpoints';
import { IResponseCatalogCrea } from '../model/http/catalog.model';
import { mockCatalogResponseCrea } from 'src/mocks/catalog.mocks';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private consumeService: ConsumeService) {}

  getCatalogCrea = (): Observable<IResponseCatalogCrea> =>
    of(mockCatalogResponseCrea);
  // this.consumeService.httpGet(`${Endpoints.catalog.crea}`);
}
