import { TestBed } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import { ConsumeService } from './consume.service';
import { mockCatalogResponseCrea } from 'src/mocks/catalog.mocks';

describe('CatalogService', () => {
  let service: CatalogService;
  let consumeServiceSpy: jasmine.SpyObj<ConsumeService>;

  beforeEach(() => {
    consumeServiceSpy = jasmine.createSpyObj('ConsumeService', ['httpGet']);
    TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: ConsumeService, useValue: consumeServiceSpy }],
    });
    service = TestBed.inject(CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getCatalogCrea', () => {
    it('should get list of CReA', (doneFn: DoneFn) => {
      const mockData = mockCatalogResponseCrea;
      service.getCatalogCrea().subscribe((response) => {
        expect(response).toEqual(mockData);
        expect(response).toBeDefined();
        doneFn();
      });
    });

    it('should return a list of 5 items', (doneFn: DoneFn) => {
      service.getCatalogCrea().subscribe((response) => {
        expect(response.response.length).toBe(5);
        doneFn();
      });
    });
  });
});
