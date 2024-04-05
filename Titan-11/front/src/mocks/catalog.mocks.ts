import { FormBuilder } from '@angular/forms';
import { Art } from 'src/app/model/http/catalog.model';

export const creaResponse: Array<Art> = [
  {
    id: 1,
    name: 'Titan-Angular',
    description: 'Este es un arte de CReA',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
    form: new FormBuilder(),
  },
  {
    id: 2,
    name: 'Alnilam-Java',
    description: 'Este es un arte de CReA',
    image:
      'https://cdn.icon-icons.com/icons2/3398/PNG/512/boot_spring_logo_icon_214693.png',
    form: new FormBuilder(),
  },
  {
    id: 3,
    name: 'Mintaka-.Net',
    description: 'Este es un arte de CReA',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png',
    form: new FormBuilder(),
  },
  {
    id: 4,
    name: 'Alnitak-Node',
    description: 'Este es un arte de CReA',
    image:
      'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
    form: new FormBuilder(),
  },
  {
    id: 5,
    name: 'Betelgeuse-Python',
    description: 'Este es un arte de CReA',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    form: new FormBuilder(),
  },
];

export const MockDragDrop: Array<Art> = [
  {
    id: 1,
    name: 'Titan-Angular',
    description: 'Este es un arte de CReA',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
    form: new FormBuilder(),
  },
];

export const mockCatalogResponseCrea = {
  code: 200,
  success: true,
  message: 'Operación Exitosa',
  response: creaResponse,
};
