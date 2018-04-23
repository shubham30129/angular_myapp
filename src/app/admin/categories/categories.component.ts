import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cat: any;
  id1 = '';
  editMode: boolean = false;
  showModel: boolean = true;
  constructor(private  router: Router , public categoryService: CategoryService ) { }

  ngOnInit() {
    this.categoryService.display();
  }

  onSubmit(f) {
    console.log(f.value);
    const category = f.value.category;
    const userid = localStorage.getItem('userid');
     this.categoryService.addCategory({category: category, userID: userid});
     this.showModel = false;
  }
  edit(id) {
    this.editMode = true;
    this.categoryService.editService(id).subscribe((data) => {
      console.log('data', data);
      this.id1 = data[0].id;
      this.cat = data[0].category_name;
    });
  }
  update() {
    const id = this.id1;
    const cat = this.cat;
    this.categoryService.updateCategory({catID: this.id1 , category: this.cat});
  }
  delete(id) {
    debugger;
    this.categoryService.delete({did: id});
  }

}
