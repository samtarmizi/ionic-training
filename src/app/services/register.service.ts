import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(request:any)
  {
    // POST register endpoint
    let url = 'https://staging.ecomplaint.tarsoft.my/api/v1/register';

    var body = new FormData();
    body.append('name', request.name);
    body.append('nric', request.nric);
    body.append('email', request.email);
    body.append('password', request.password);

    return new Promise((resolve, reject) => {
      this.http.post(url, body).subscribe((response) => {
        console.log(response)
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}
