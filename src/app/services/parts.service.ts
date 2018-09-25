import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

const apiName= 'demuc';

export interface parts{
  id: number,
  iD_MonHoc : number,
  ma : string,
  ten : string,
  hienthi : boolean,
  nguoitao : number,
  ngaytao : Date,
  nguoiCN: number,
  ngayCN: Date,
  khac : string
}

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor() { }
}
