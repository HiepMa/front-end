import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  baseUrl = 'https://localhost:44310/api/';
  auth ={
    login : this.baseUrl + 'Auth/Token',
    user:this.baseUrl + 'Users'
  };
  getApiLink(name: string){
    return this.baseUrl = '/' + name;
  }
} 