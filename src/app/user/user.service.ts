import { User } from './user';
import { AuthReturn } from  './authReturn';

import { Injectable } from  '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService{
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  private options = new RequestOptions({headers: this.headers});
  private hrsysbackend = 'http://localhost:3300';
  constructor(private http:Http){}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    // for demo purposes only
    return Promise.reject(error.message || error);
  }

  registerUser(user:User):Observable<AuthReturn>{
    console.log("in service");
    console.log(user);
    const signupUrl = this.hrsysbackend + "/register";
    let jsonPromiseObj =  this.http.post(
      signupUrl,JSON.stringify(user), this.options
    ).map(function(res){
      let body = res.json();
      return body || {};
    }).catch(function(err:Response | any){
      return Observable.throw("error registering user");
    });
    return jsonPromiseObj;
  }
}
