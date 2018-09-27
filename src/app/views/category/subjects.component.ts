import { Component, OnInit, OnDestroy } from '@angular/core';
import { Monhoc } from '../../models/catelogy/monhoc.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
const apiName = 'monhoc';
@Component({
  selector: 'app-subject',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit, OnDestroy {
  monhocList: any = [];
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
      this.monhocList = res;
      console.log(res);
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  GetAll(){
    this.myservicesService.getAll().subscribe(res => {this.monhocList=res}); 
  }
  Add(subCode,subName)
  {
        var today = new Date();
        let tmp = new Monhoc(subCode.value,subName.value,true,13,today,4,today,'');
        console.log(tmp);
        this.myservicesService.add(tmp).subscribe(data => {
          // refresh the list
          this.GetAll();
          return true;
        });
  }
  public id;
  public ma;
  public ten;
  public ht;
  Value(tmp)
  {
    this.id = tmp;
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(
      id=>{console.log(this.id);
      this.GetAll();
      return true;
    });
  }
  Update(subCode1,subName1){
    var today = new Date();
    let tmp = new Monhoc(subCode1.value,subName1.value,true,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      console.log(id);
      this.GetAll();
      return true;
    });
  }
}