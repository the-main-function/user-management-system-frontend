import { ThrowStmt } from '@angular/compiler';
import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  @Input() userId!:number

  constructor(
      private route : ActivatedRoute, 
      private router: Router,
      private userService:UserService,
      private ngZone:NgZone) { }

  ngOnInit(): void {
  }

  public deleteUser(userId:any){
    console.log(userId);
    console.log("in deleteUser() at delete-user-component");
    this.userService.deleteUser(userId).subscribe(data=>console.log(data),error=>console.log(error));
    setTimeout(()=>{
      this.router.navigateByUrl("/users");
    },1000);
  }
}
