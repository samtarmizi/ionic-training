import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTodosPage } from './list-todos.page';

const routes: Routes = [
  {
    path: '',
    component: ListTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTodosPageRoutingModule {}
