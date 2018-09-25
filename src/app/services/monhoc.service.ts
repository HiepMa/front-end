import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

const apiName = 'monhoc';

export interface subject{
  id : number,
  ma : string,
  ten : string,
  hienthi : true,
  nguoitao : number,
  ngaytao : Date,
  nguoiCN: number,
  ngayCN : Date,
  khac : string
}

@Injectable({
  providedIn: 'root'
})
export class MonhocService {

  constructor(private apiservices: ApiService, private http: HttpClient ) { }
  getAll(){
    return this.http.get(this.apiservices.baseUrl+apiName, {
      observe: 'body'
    });
  }
  get(id){
    return this.http.get(this.apiservices.baseUrl+apiName+'/'+id, {
      observe: 'body'
    });
  }
  add(data){
    return this.http.post(this.apiservices.baseUrl+apiName, data, {
      observe: 'body'
    });
  }
  update(id, data){
    return this.http.put(this.apiservices.baseUrl+apiName, data, {
      observe: 'body'
    });
  }
  delete(id){
    return this.http.delete(this.apiservices.baseUrl+apiName+'/'+id, {
      observe: 'body'
    });
  }
}
