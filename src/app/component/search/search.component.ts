import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userService :UserService,private router:Router) { }

  ngOnInit(): void {
  }

  doSearch(keyword:string){
    console.log(keyword);
    this.router.navigateByUrl(`/users/search/${keyword}`);
  }

}
