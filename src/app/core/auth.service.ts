import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  loginWithCredentials(username: string, password: string): boolean {
    if(username === 'yanmeng' && password === '123')
      return true;
    return false;
  }
}
