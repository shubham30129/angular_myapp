import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './admin/head/head.component';
import { MenuComponent } from './admin/menu/menu.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import {FormsModule} from "@angular/forms";
import {CrudService} from "./crud.service";
import { LoginComponent } from './admin/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login/login.service';
import {CategoryService } from  './services/category/category.service';
import { LogoutComponent } from './logout/logout.component';
import {AuthGuard} from './auth.guard';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';


const appRoutes: Routes = [
  { path: 'home', component: CategoriesComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    CategoriesComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule
  ],
  providers: [CrudService, LoginService, AuthGuard, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

