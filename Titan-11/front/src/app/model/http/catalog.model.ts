import { FormBuilder } from '@angular/forms';
import { IBaseResponseHttp } from './commons.model';

export interface Art {
  id: number;
  name: string;
  description: string;
  image: string;
  form: FormBuilder | any;
}

export interface IResponseCatalogCrea extends IBaseResponseHttp {
  response: Art[];
}
