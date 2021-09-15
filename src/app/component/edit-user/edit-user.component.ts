import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/common/category';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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
  user:User = new User(0,"","",this.category);

  constructor(private route : ActivatedRoute, private userService:UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>this.preFillForm())
  }

  public preFillForm(){
    const containsId:boolean = this.route.snapshot.paramMap.has('id');
    console.log(containsId);
    if(containsId){
      const userId:number = Number(this.route.snapshot.paramMap.get('id'));
      console.log(userId);  
      this.userService.getUserById(userId).subscribe(data=> {
                                                              this.user = data;
                                                              console.log(data);
                                                              console.log(this.user);
                                                            });
    }
  }

  public onSubmit(){
    this.userService.updateUser(this.user).subscribe(data=>console.log(data));
  }

}
