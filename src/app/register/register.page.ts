import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  request: any;
  response: any;

  constructor() { }

  ngOnInit() {
    this.request = {
      name: null,
      email: null,
      password: null,
      nric: null,
    }
  }

  submitForm(){
    // call function from service
  }

}
