import { User } from './user';
import { Injectable } from  '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class UserService{
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  });
  private hrsysbackend = 'http://localhost:3300';
  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

  registerUser(user):User{
    console.log("in service");
    console.log(user);
    const signupUrl = this.hrsysbackend + "/register";
    let jsonPromiseObj =  this.http.post(
      signupUrl,JSON.stringify(user), {headers: this.headers}
    ).toPromise()
    .then(response => response.json().data)
    .catch(this.handleError);
    let success = jsonPromiseObj.then(obj => obj.success as string);
    let msg = jsonPromiseObj.then(obj => obj.message as string);
    console.log('success ='+success);
    console.log('message ='+ msg);
    return user;
  }
}
