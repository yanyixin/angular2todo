import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <span>我的名字是：{{username}}</span>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
      <fieldset ngModelGroup="login">
        <div>
          <input required minlength="3"  type="text" [(ngModel)]="username" #usernameRef="ngModel" name="username">
          {{usernameRef.errors | json}}
          <div *ngIf="usernameRef.errors?.minlength">最短为3</div>
          <input required  type="password" [(ngModel)]="password" #passwordRef="ngModel" name="password">
          {{passwordRef.errors | json}}
          <button type="submit">submit</button>
        </div>
      </fieldset>
    </form>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  private username;
  private password;
  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  constructor( @Inject('auth') private service ) {

  }
  ngOnInit() {

  }
  onClick() {
    console.log(this.service.loginWithCredentials(this.username, this.password));
  }
  onSubmit(formValue) {
    console.log(formValue.login);
  }

}
