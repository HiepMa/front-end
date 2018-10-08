import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Monhoc } from '../../models/catelogy/monhoc.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
const apiName = 'monhoc';
@Component({
  selector: 'app-subject',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  monhocList: any = [];
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
    this.myservicesService.getAll().subscribe(res => 
    {
      this.monhocList=res;
      this.dtTrigger.next();
    }); 
  }
  Add(subCode,subName)
  {
        var today = new Date();
        let tmp = new Monhoc(this.id,subCode.value,subName.value,true,false,13,today,4,today,'');
        this.myservicesService.add(tmp).subscribe(data => {
          this.monhocList.push(data);
          console.log(this.monhocList);
        });
        
  }
  public Index;
  public id;
  public ma;
  public ten;
  public ht;
  Value(index)
  {
    this.Index = index;
    this.id = this.monhocList[index].id;
    console.log(this.id);
    console.log(this.monhocList);
    this.ma = this.monhocList[index].ma;
    this.ten = this.monhocList[index].ten;
    this.ht = this.monhocList[index].hienThi;
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(data=>
    {
      this.monhocList.splice(this.Index,1,);
      console.log(this.monhocList);
    });
  }
  Update(subCode1,subName1){
    var today = new Date();
    let tmp = new Monhoc(this.id,subCode1.value,subName1.value,true,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(data =>{
      this.monhocList.splice(this.Index,1,tmp);
      console.log(this.id);
    });
  }
}