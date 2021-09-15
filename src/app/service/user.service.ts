import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) {}

  public listUsers(): Observable<User[]>{
    console.log("user service listUsers() called");
    const baseUrl = "http://localhost:8080/ums/api/users";
    return this.httpClient.get<User[]>(baseUrl);
  }

  public listUsersByCategory(categoryName:string): Observable<User[]>{
    console.log("user service listUsersByCategory() called");
    console.log(categoryName);
    const baseUrl = `http://localhost:8080/ums/api/users/with-category/${categoryName}`;
    console.log(baseUrl);
    return this.httpClient.get<User[]>(baseUrl);
  }

  public addUser(user:User){
    const baseUrl = "http://localhost:8080/ums/api/user";
    console.log("about to call api with post");
    return this.httpClient.post(baseUrl,user);
  }
  
  public deleteUser(userId:number){
    const baseUrl = `http://localhost:8080/ums/api/user/delete/${userId}`;
    console.log("about to call api with delete");
    return this.httpClient.delete(baseUrl);
  }

  public getUserById(userId:number):Observable<User>{
    const baseUrl = `http://localhost:8080/ums/api/user/with-id/${userId}`;
    console.log("calling api to get user by userId get");
    return this.httpClient.get<User>(baseUrl);
  }

  public updateUser(user:User){
    const baseUrl = `http://localhost:8080/ums/api/user/update`;
    console.log("calling api to update user POST");
    return this.httpClient.put(baseUrl,user);
  }

  public searchUserByKeyword(keyword:string):Observable<User[]>{
    console.log("user service listUsersByCategory() called");
    console.log(keyword);
    const baseUrl = `http://localhost:8080/ums/api/users/search/${keyword}`;
    return this.httpClient.get<User[]>(baseUrl);
  }
}
