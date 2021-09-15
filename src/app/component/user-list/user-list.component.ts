import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[] = [];

  constructor(private userService : UserService, private route : ActivatedRoute, private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.onSameUrlNavigation = 'reload';
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>this.handleRequest())
  }

  public handleRequest(){
    const containsCategory : boolean = this.route.snapshot.paramMap.has('name');
    const containsKeyword : boolean = this.route.snapshot.paramMap.has('keyword');
    console.log(containsCategory);
    if(containsCategory){
      const categoryName =  String(this.route.snapshot.paramMap.get('name'));
      console.log(categoryName);
      this.getUsersByCategory(categoryName);
    }
    else if(containsKeyword){
      const keyword = String(this.route.snapshot.paramMap.get('keyword'));
      console.log(keyword);
      this.getUsersByKeyword(keyword);
    }
    else{
      this.getAllUsers()
    }
  }

  public getAllUsers(){
    this.userService.listUsers().subscribe(data=>this.users=data);
  }

  public getUsersByCategory(categoryName:string){
    this.userService.listUsersByCategory(categoryName).subscribe(data=>this.users=data);
  }

  public getUsersByKeyword(keyword:string){
    this.userService.searchUserByKeyword(keyword).subscribe(data=>this.users=data);
  }
}
