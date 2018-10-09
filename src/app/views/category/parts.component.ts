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
  public id_mh;
  hthi: boolean;
  Value(ma,index)
  {
    this.Index = index;
    this.id = ma;
    this.ma = this.partList[index].ma;
    this.ten = this.partList[index].ten;
    this.ht = this.partList[index].hienThi;
    this.id_mh = this.partList[index].iD_MonHoc;
    // this.partSube = this.partList[index].iD_MonHoc;
  }
  Changed(indexid, index, event){
    this.Value(indexid,index);
    this.hthi = event.target.checked;
    console.log(this.hthi);
    var today = new Date();
    let temp = new Parts(this.id,this.id_mh,this.ma,this.ten,this.hthi,false,4,today,13,today,'');
    this.myservicesService.update(this.id,temp).subscribe(id =>{
      this.monhocList.splice(index,1,temp);
    });
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
    this.myservicesService.delete(this.id).subscribe(data=>
      {
        this.partList.splice(this.Index,1,);
        console.log(this.partList);
      });
  }
  Update(partCodee,partNamee,partSube){
    var today = new Date();
    let tmp = new Parts(this.id,partSube.value,partCodee.value,partNamee.value,this.hthi,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(data =>{
      this.partList.splice(this.Index,1,tmp);
    });
  }
}