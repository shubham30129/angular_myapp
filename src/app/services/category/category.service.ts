import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CrudService} from '../../crud.service';

@Injectable()
export class CategoryService {
  data:any;
  constructor(public http: HttpClient , private router: Router , private crudService: CrudService) { }

  addCategory(categoryData) {
    return this.http.post(this.crudService.path + '/category' , categoryData).subscribe(
      () => {
        this.display();
      }
    );
  }

  display() {
    return this.http.get(this.crudService.path + '/category').subscribe(
      (res) => {
        console.log(res);
        this.data = res;
      }
    );
  }

  editService(id) {
    console.log(id);
    return this.http.get(this.crudService.path + '/category/' + id);
  }

  updateCategory(categoryData) {
    return this.http.put(this.crudService.path + '/category' , categoryData).subscribe(
      () => {
        this.display();
      }
    );
  }

    delete(id) {
    debugger;
    console.log(id);
    return this.http.delete(this.crudService.path + '/category/' + id.did).subscribe(
      () => {
        this.display();
    }
    );
  }

}
