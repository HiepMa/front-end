import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';

import {Parts} from '../../models/catelogy/parts.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';

const apiName= 'demuc';
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
    constructor(private myservicesService: MyservicesService) {}
    ngOnInit(): void {
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
  // partSube:string;
  // nrSelect:string;
  Value(ma,index)
  {
    this.Index = index;
    this.id = ma;
    this.ma = this.partList[index].ma;
    this.ten = this.partList[index].ten;
    this.ht = this.partList[index].hienThi;
    // this.partSube = this.partList[index].iD_MonHoc;
  }
  Add(partCode,partName,partSub)
  {
        var today = new Date();
        let tmp = new Parts(this.id,partSub.value,partCode.value,partName.value,true,false,13,today,4,today,'');
        console.log(tmp);
        this.myservicesService.add(tmp).subscribe(data => {
          this.partList.push(data);
          console.log(this.partList);
        });
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(id=>
      {
        this.partList.splice(this.Index,1,);
        console.log(this.partList);
      });
  }
  Update(partCodee,partNamee,partSube){
    var today = new Date();
    let tmp = new Parts(this.id,partSube.value,partCodee.value,partNamee.value,true,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      this.partList.splice(this.Index,1,tmp);
    });
  }
}