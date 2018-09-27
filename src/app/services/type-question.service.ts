import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';
import { Type_Question } from '../models/type_question.class';

const apiName= 'loai_ch';

@Injectable({
  providedIn: 'root'
})
export class TypeQuestionService {

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
  update(id, data: Type_Question){
    return this.http.put(this.apiservices.baseUrl+apiName+'/'+id, data, {
      observe: 'body'
    });
  }
}
