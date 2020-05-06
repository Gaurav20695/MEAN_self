import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signup(formvalue: object) {

    console.log(formvalue);

    return this.http.post('http://localhost:3000/user/signup', formvalue);


  }
}
