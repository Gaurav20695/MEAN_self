import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide: boolean = true;

  constructor(private _userserivce: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this._userserivce.signup(form.value).subscribe((res: any) => {
      console.log('===========================');
      console.log(res.message);

    });
  }

}
