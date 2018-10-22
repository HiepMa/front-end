import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';

import {Parts} from '../../models/catelogy/parts.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import {FormGroup, Validators,FormBuilder}from '@angular/forms'

const apiName= 'demuc';
export interface newpart{
  code: string;
  name: string;
  partsub: any;
}
@Component({
    templateUrl:'parts.component.html'
})
export class PartsComponent implements OnInit, OnDestroy{
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
    partList: any;
    monhocList: any;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    public form: FormGroup;
    public form1: FormGroup;
    newp: newpart = {} as newpart;
    updatep: newpart = {} as newpart;
    constructor(private fb: FormBuilder, private myservicesService: MyservicesService) {}
    ngOnInit(): void {
      this.form = this.fb.group({
        code: [this.newp.code, Validators.compose([Validators.required])],
        name: [this.newp.name, Validators.compose([Validators.required])],
        partsub: [this.newp.partsub],

      });
      this.form1 = this.fb.group({
        code: [this.updatep.code],
        name: [this.updatep.name, Validators.compose([Validators.minLength(1)])],
        partsub: [this.updatep.partsub],
      });
      this.myservicesService.getApiName(apiName);
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        dom: 'Blfrtip',
        buttons: [
          'colvis',
          'copy',
          'print',
          'excel'
        ]
      };
      this.myservicesService.getObject('monhoc').subscribe((res)=> {this.monhocList=res});
      this.myservicesService.getAll()
      .subscribe(res => {
        this.partList = res;
        console.log(res);
        this.dtTrigger.next();
      });
    }
  
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  public Index;
  public id;
  public ma;
  public ten;
  public ht;
  public id_mh;
  public tenmh;
  hthi: boolean;
  Value(index)
  {
    this.Index = index;
    this.id = this.partList[index].id;
    this.ma = this.partList[index].ma;
    this.ten = this.partList[index].ten;
    this.ht = this.partList[index].hienthipart;
    this.id_mh = this.partList[index].iD_MonHoc;
    this.tenmh = this.partList[index].monHoc.ten;
    // console.log(this.id)
    // this.partSube = this.partList[index].iD_MonHoc;
  }
  Changed(index, event){
    this.Value(index);
    this.hthi = event.target.checked;
    // console.log(this.hthi);
    // this.ht = this.hthi;
    var today = new Date();
    let temp = new Parts(this.id,this.id_mh,this.ma,this.ten,this.hthi,false,4,today,13,today,'');
    this.myservicesService.update(this.id,temp).subscribe(id =>{
      temp.monHoc = this.monhocList.find(x => x.id == this.id_mh);
      this.partList.splice(index,1,temp);
    });
  }
  errorms;
  checkPartCode = false;
  Check(){
    for(let i of this.partList){
      // console.log(i.ma)
      if(this.newp.code == i.ma){ 
        this.checkPartCode = true;
        this.errorms = "Code already use"; 
        break;
      }
      else {this.checkPartCode=false;}
    }
  }
  // AddpartSub:any;
  Add()
  {
    console.log(this.newp.partsub)
    this.Check();
    console.log(this.newp.code + " "+ this.newp.name);
    if(this.checkPartCode==false){
        var today = new Date();
        let tmp = new Parts(this.id,this.newp.partsub,this.newp.code,this.newp.name,true,false,13,today,4,today,'');
        console.log(tmp);
        this.myservicesService.add(tmp).subscribe(data => {
          tmp.monHoc = this.monhocList.find(x => x.id == this.newp.partsub);
          this.partList.push(tmp);
          console.log(this.partList);
        },
        res => {
          console.log(res.error.text);
          this.errorms = res.error.text;
        });
        this.checkPartCode = false;
    }
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(data=>
      {
        this.partList.splice(this.Index,1,);
        console.log(this.partList);
      });
  }
  Update(partCodee){
    this.updatep.name = this.ten;
    // console.log(this.updatep.partsub)
    // console.log(partCodee.value + " "+ this.updatep.name);
    var today = new Date();
    let tmp = new Parts(this.id,this.updatep.partsub,partCodee.value,this.updatep.name,this.hthi,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(data =>{
      tmp.monHoc = this.monhocList.find(x => x.id == this.updatep.partsub);
      this.partList.splice(this.Index,1,tmp);
    });
  }
}