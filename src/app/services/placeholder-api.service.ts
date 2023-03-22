import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderApiService {

  constructor(private http: HttpClient) { }

  getTodos()
  {
    // call todos api
    let url = 'https://jsonplaceholder.typicode.com/todos';

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((response) => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}
