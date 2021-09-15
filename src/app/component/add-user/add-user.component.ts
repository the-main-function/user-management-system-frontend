import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService : UserService) { }

  message!:String;

  category : Category = {
    "categoryId":0,
    "name":""
  }

  category1 : Category = {
    "categoryId":1,
    "name":"admin"
  }

  category2 : Category = {
    "categoryId":2,
    "name":"developer"
  }

  category3 : Category = {
    "categoryId":3,
    "name":"marketing"
  }

  public categories : Category[] = [this.category1,this.category2,this.category3];
  user = new User(0,"","", this.category);
  

  public onSubmit(){
    console.log(this.user);   
    this.userService.addUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
    this.message="employee added successfully!!"
  }

  ngOnInit(): void {
  }

}
