import { Component, ViewChild, OnInit, OnDestroy, ViewChildren  } from '@angular/core';
import { GiaoVien } from '../../models/catelogy/giaovien.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';

const apiName = 'giaovien';
@Component({
    templateUrl:'teachers.component.html'
})
export class TeachersComponent implements OnInit, OnDestroy{
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
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
          title: '#',
          searchable: false,
          orderable: false,
          // filterable: false,
          // sortable: false,
          // orderFixed: [ 0, 'asc' ],
          // order: [[ 1, 'asc' ]],
        }, {
          title: 'Account'
        }, {  
          title:'Full Name'
        }, {  
          title:'DOB'
        }, {  
          title:'Phone'
        }, {  
          title:'Email'
        }, {   
          title:'Address',
          // visible: false
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
    genders: string[] = ["0","1"];
    gender: string;
  GetAll(){
    this.myservicesService.getAll().subscribe((res) => 
    {
      this.teacherlist=res; 
      this.dtTrigger.next();
    }); 
  }
  Add(teacherName,teacherPass,teacherFirstName,teacherLastName,teacherDOB,teacherPhone,teacherEmail,teacherAddress)
  {
    alert(teacherDOB.value)
    var today = new Date();
    let tmp = new GiaoVien(this.id,teacherName.value,teacherFirstName.value,teacherLastName.value,teacherPass.value,this.gender,teacherEmail.value,teacherPhone.value,teacherAddress.value,teacherDOB.value,true,false,4,today,13,today,'');
    console.log(tmp);
    this.myservicesService.add(tmp).subscribe(data => {
      this.teacherlist.push(data);
      console.log(this.teacherlist);
    });
  }
  public Index;
  public id;
  public ma: string;
  public ho: string;
  public ten: string;
  public matKhau: string;
  public gioitinh: string;
  public email: string;
  public dienThoai: string;
  public diaChi: string;
  public ngaysinh: Date;
  public hienThi: boolean;
  public xoa;
  hthi: boolean;
  Value(tmp,index)
  {
    this.Index = index;
    this.id = tmp;
    console.log(this.id);
    this.ma = this.teacherlist[index].ma;
    this.ho = this.teacherlist[index].ho;
    this.ten = this.teacherlist[index].ten;
    this.matKhau = this.teacherlist[index].matKhau;
    this.gioitinh = this.teacherlist[index].gioiTinh;
    this.gender = this.gioitinh;
    this.xoa = this.teacherlist[index].xoa;
    this.email = this.teacherlist[index].email;
    this.dienThoai = this.teacherlist[index].dienThoai;
    this.diaChi = this.teacherlist[index].diaChi;
    this.ngaysinh = this.teacherlist[index].ngaySinh;
    this.hienThi = this.teacherlist[index].hienThi;  
  }
  // @ViewChildren('hthi') item;
  Changed(indexid,index, event){
    this.Value(indexid,index);
    this.hthi = event.target.checked;
    console.log(this.hthi);
    var today = new Date();
    let temp = new GiaoVien(this.id,this.ma,this.ho,this.ten,this.matKhau,this.gender,this.email,this.dienThoai,this.diaChi,this.ngaysinh,this.hthi,false,4,today,13,today,'');
    this.myservicesService.update(indexid,temp).subscribe(id =>{
      this.teacherlist.splice(index,1,temp);
    });
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe( data => 
    {
      this.teacherlist.splice(this.Index,1,);
      console.log(this.teacherlist);
    });
  }
  radioFun(){
    console.log(this.gender, '-------');
  }
  Update(teacherName1,teacherPass1,teacherFirstName1,teacherLastName1,teacherDOB1,teacherPhone1,teacherEmail1,teacherAddress1){
    var today = new Date();
    let tmp = new GiaoVien(this.id,teacherName1.value,teacherFirstName1.value,teacherLastName1.value,teacherPass1.value,this.gender,teacherEmail1.value,teacherPhone1.value,teacherAddress1.value,teacherDOB1.value,this.hthi,false,4,today,13,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(id =>{
      this.teacherlist.splice(this.Index,1,tmp);
    });
  }
}