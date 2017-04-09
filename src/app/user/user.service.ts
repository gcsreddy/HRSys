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
    'Access-Control-Allow-Origin':'*',
    'Authorization':localStorage.getItem('userJwt')
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
      let userJwt = res.headers.get('Authorization');
      console.log(res);
      console.log(userJwt);
      localStorage.setItem('uerJwt',userJwt);
      let body = res.json();
      return body || {};
    }).catch(function(err:Response | any){
      return Observable.throw("error registering user");
    });
    return jsonPromiseObj;
  }

  authenticate():Observable<any>{
    const authenticateUrl = this.hrsysbackend + "/authenticate";
    let jsonPromiseObj =  this.http.post(
      authenticateUrl,{}, this.options
    ).catch(function(err:Response | any){

      //TODO: some crappy code down here. learn more and clean up.

      if(err.status===401){
        console.log('401- not Authorized');
        return Observable.create((o) => {
          o.next({
              success:'false',message:'not authorized'
          });
          o.complete();
        });
      }
      return Observable.throw("error registering user");
    });
    return jsonPromiseObj;
  }

  loginUser(user:User):Observable<AuthReturn>{
    console.log(user);
    const signupUrl = this.hrsysbackend + "/login";
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
