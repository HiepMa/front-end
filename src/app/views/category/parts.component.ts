<<<<<<< HEAD
import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
=======
import { Component, ViewChild  } from '@angular/core';
import { PartsService } from '../../services/catelogy/parts.service';
import { MonhocService } from '../../services/catelogy/monhoc.service';
>>>>>>> 126be87f5a655c85c2a88f987113f4279b3662cf
import {Parts} from '../../models/catelogy/parts.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

const apiName= 'demuc';
@Component({
    templateUrl:'parts.component.html'
})
<<<<<<< HEAD
export class PartsComponent implements OnInit, OnDestroy{
    partList: any;
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    constructor(private myservicesService: MyservicesService) {}
    ngOnInit(): void {
      this.myservicesService.getApiName(apiName);
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
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
=======
export class PartsComponent{
  monhocList : any;
  partList: any;
  constructor(private partServices: PartsService, private monhocservices : MonhocService) {
    this.partServices.getAll().subscribe((res) => {this.partList=res}); 
    this.monhocservices.getAll().subscribe((res)=> {this.monhocList=res});
  }
>>>>>>> 126be87f5a655c85c2a88f987113f4279b3662cf
  public id;
  Value(ma)
  {
    this.id = ma;
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