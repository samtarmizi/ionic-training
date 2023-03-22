import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  request: any;
  response: any;

  constructor(
    private _register:RegisterService,
    private router:Router
    ) { }

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
      if(this.response.success){
        // redirect to login page
        this.router.navigate(['/success']);
      }
    }).catch((error) => {
      console.log(error)
    })
  }

}
