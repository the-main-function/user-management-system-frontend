import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';

import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './component/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlankComponent } from './component/blank/blank.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { SearchComponent } from './component/search/search.component';

const routes : Routes = [
  {path:"users/category/:name",component:UserListComponent},
  {path:"users/search/:keyword",component:UserListComponent},
  {path:"user/edit/:id",component:EditUserComponent},
  {path:"user/delete/:id",component:DeleteUserComponent},
  {path:"user/add",component:AddUserComponent},
  {path:"users",component:UserListComponent,pathMatch:'full'},
  {path:'**',component:BlankComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    HomeComponent,
    BlankComponent,
    DeleteUserComponent,
    EditUserComponent,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
