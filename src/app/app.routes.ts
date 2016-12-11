/**
 * Created by yanmeng on 2016/12/11.
 */

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { TodoComponent } from "./todo/todo.component";

export const routes: Routes = [
  {
    path      : '',
    redirectTo: 'todo',
    pathMatch : 'full'
  }, {
    path     : 'login',
    component: LoginComponent
  },{
    path     : 'todo',
    component: TodoComponent
  }
];
export const routing = RouterModule.forRoot(routes);
