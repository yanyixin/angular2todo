import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {TodoComponent} from './todo/todo.component'
import { AuthService } from './core/auth.service';
import { RouterModule } from "@angular/router";
import { routing } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide:'auth',useClass:AuthService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
