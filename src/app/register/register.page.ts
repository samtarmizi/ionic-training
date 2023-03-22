import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  request: any;
  response: any;

  constructor(private _register:RegisterService) { }

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
    this._register.register(this.request).then((response) => {
      this.response = response;
      console.log('from register ts',this.response)
    }).catch((error) => {
      console.log(error)
    })
  }

}
