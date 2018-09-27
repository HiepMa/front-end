import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service'
import { Monhoc } from '../../models/catelogy/monhoc.class';

const apiName = 'monhoc';

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
  add(data:Monhoc)
  {
    return this.http.post(this.apiservices.baseUrl+apiName, data, {
      observe: 'body'
    });
  }
  update(id, data: Monhoc){
    return this.http.put(this.apiservices.baseUrl+apiName+'/'+id, data, {
      observe: 'body'
    });
  }
  delete(id){
    return this.http.delete(this.apiservices.baseUrl+apiName+'/'+id, {
      observe: 'body'
    });
  }
}
