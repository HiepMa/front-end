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
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    constructor(private myservicesService: MyservicesService) {}
    ngOnInit(): void {
      this.myservicesService.getApiName(apiName);
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        columns: [{
          title: '#'
        }, {
          title: 'Account',
          visible: false
        }, {  
          title:'First Name'
        }, {  
          title:'Last Name'
        }, {  
          title:'DOB',
          visible: false
        }, {  
          title:'Phone'
        }, {  
          title:'Email'
        }, {   
          title:'Address',
          visible: false
        }, { 
          title:'Gender'
        }, {
          title:'Status'
        }, {  
          title:'Action'
        }],
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
    var today = new Date();
    let tmp = new GiaoVien(teacherName.value,teacherFirstName.value,teacherLastName.value,teacherPass.value,"Male",teacherEmail.value,teacherPhone.value,teacherAddress.value,today,true,4,today,13,today,'');
    console.log(tmp);
    this.myservicesService.add(tmp).subscribe();
  }
  public id;
  public ma;
  public ho;
  public ten;
  public matKhau;
  public gioitinh;
  public email;
  public dienThoai;
  public diaChi;
  public ngaySinh;
  public hienThi;
  Value(tmp)
  {
    this.id = tmp;
    this.ma = this.teacherlist[this.id].ma;
    this.ho = this.teacherlist[this.id].ho;
    this.ten = this.teacherlist[this.id].ten;
    this.matKhau = this.teacherlist[this.id].matKhau;
    this.gioitinh = this.teacherlist[this.id].gioitinh;
    this.email = this.teacherlist[this.id].email;
    this.dienThoai = this.teacherlist[this.id].dienThoai;
    this.diaChi = this.teacherlist[this.id].diaChi;
    this.ngaySinh = this.teacherlist[this.id].ngaySinh;
    this.hienThi = this.teacherlist[this.id].hienThi;  
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(id=>{console.log(this.id)})
  }
  Update(teacherName1,teacherPass1,teacherFirstName1,teacherLastName1,teacherDOB1,teacherPhone1,teacherEmail1,teacherAddress1){
    var today = new Date();
    let tmp = new GiaoVien(teacherName1.value,teacherFirstName1.value,teacherLastName1.value,teacherPass1.value,"Male",teacherEmail1.value,teacherPhone1.value,teacherAddress1.value,today,true,4,today,13,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      console.log(id);
    });
  }
}