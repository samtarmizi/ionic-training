import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTodosPageRoutingModule } from './list-todos-routing.module';

import { ListTodosPage } from './list-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTodosPageRoutingModule
  ],
  declarations: [ListTodosPage]
})
export class ListTodosPageModule {}
