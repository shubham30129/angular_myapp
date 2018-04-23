import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  constructor() { }
  path: String = 'http://localhost:1212/api';
}
