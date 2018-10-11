import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  apiName: string;
  constructor(private apiservices: ApiService, private http: HttpClient ) { }
  getApiName(apiName){
    this.apiName = apiName
  }
  getObject(ob){
    return this.http.get(this.apiservices.baseUrl+ob, {
      observe: 'body'
    });
  }
  getAll(){
    return this.http.get(this.apiservices.baseUrl+this.apiName, {
      observe: 'body'
    });
  }
  get(id){
    return this.http.get(this.apiservices.baseUrl+this.apiName+'/'+id, {
      observe: 'body'
    });
  }
  add(data:any)
  {
    return this.http.post(this.apiservices.baseUrl+this.apiName, data, {
      observe: 'body'
    });
  }
  addObj (ob,data:any){
    return this.http.post(this.apiservices.baseUrl+ob,data,{
      observe :'body'
    })
  }
  update(id, data: any){
    return this.http.put(this.apiservices.baseUrl+this.apiName+'/'+id, data, {
      observe: 'body'
    });
  }
  delete(id){
    return this.http.delete(this.apiservices.baseUrl+this.apiName+'/'+id, {
      observe: 'body'
    });
  }
}
