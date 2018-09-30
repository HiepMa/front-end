import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';

import {Parts} from '../../models/catelogy/parts.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

const apiName= 'demuc';
@Component({
    templateUrl:'parts.component.html'
})
export class PartsComponent implements OnInit, OnDestroy{
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
  public id;
  public ma;
  public ten;
  public ht;
  Value(ma)
  {
    this.id = ma;
    this.ma = this.partList[this.id].ma;
    this.ten = this.partList[this.id].ten;
    this.ht = this.partList[this.id].hienThi
  }
  Add(partCode,partName,partSub)
  {
        var today = new Date();
        let tmp = new Parts(partSub.value,partCode.value,partName.value,true,13,today,4,today,'');
        console.log(tmp);
        this.myservicesService.add(tmp).subscribe(id=>{
            console.log(tmp);
        });
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(id=>{
      console.log(id);
    }); 
  }
  Update(partCodee,partNamee,partSube){
    var today = new Date();
    let tmp = new Parts(partSube.value,partCodee.value,partNamee.value,true,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      console.log(id);
    });
  }
}