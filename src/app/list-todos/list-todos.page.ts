import { Component, OnInit } from '@angular/core';
import { PlaceholderApiService } from 'src/app/services/placeholder-api.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.page.html',
  styleUrls: ['./list-todos.page.scss'],
})
export class ListTodosPage implements OnInit {

  data: any;

  constructor(private _placeholder: PlaceholderApiService) { }

  ngOnInit() {
    this.callApiFromService();
  }

  callApiFromService(){
    this._placeholder.getTodos().then(response => {
      this.data = response;
      console.log(this.data)

    })
  }

}
