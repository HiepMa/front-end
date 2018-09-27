import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { GiaoVien } from '../../models/catelogy/giaovien.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

const apiName = 'giaovien';
@Component({
    templateUrl:'teachers.component.html'
})
export class TeachersComponent implements OnInit, OnDestroy{
    teacherlist: any;
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
        this.teacherlist = res;
        console.log(res);
        this.dtTrigger.next();
      });
    }
  
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  GetAll(){
    this.myservicesService.getAll().subscribe((res) => {this.teacherlist=res}); 
  }
  Add(teacherName,teacherPass,teacherFirstName,teacherLastName,teacherDOB,teacherPhone,teacherEmail,teacherAddress)
  {
    //   alert(teacherName:any,teacherPass:any,teacherFirstName:any,teacherLastName:any,teacherDOB:any,teacherPhone:any,teacherEmail:any,teacherAddress:any)
        var today = new Date();
        let tmp = new GiaoVien(teacherName.value,teacherFirstName.value,teacherLastName.value,teacherPass.value,true,teacherEmail.value,teacherPhone.value,teacherAddress.value,today,true,4,today,13,today,'');
        console.log(tmp);
        this.myservicesService.add(tmp).subscribe();
  }
    public id;
    public Account;
    public FirstName;
    public LastName;
    public DOB;
    public Phone;
    public Email;
    public Status;
    public Action;
  Value(tmp)
  {
    this.id = tmp;
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(id=>{console.log(this.id)})
  }
  Update(teacherName1,teacherPass1,teacherFirstName1,teacherLastName1,teacherDOB1,teacherPhone1,teacherEmail1,teacherAddress1){
    var today = new Date();
    let tmp = new GiaoVien(teacherName1.value,teacherFirstName1.value,teacherLastName1.value,teacherPass1.value,true,teacherEmail1.value,teacherPhone1.value,teacherAddress1.value,today,true,4,today,13,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      console.log(id);
    });
  }
}