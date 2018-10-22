import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Monhoc } from '../../models/catelogy/monhoc.class';
import { MyservicesService} from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { CheckResquest}  from '../../models/CheckResquest.class';
import {FormGroup, Validators,FormBuilder}from '@angular/forms'

const apiName = 'monhoc';
export interface newsubject{
  code: string;
  name: string;
}

@Component({
  selector: 'app-subject',
  templateUrl: './subjects.component.html'
})


export class SubjectsComponent implements OnInit, OnDestroy {
  CheckResq : CheckResquest;
  errorms : any ="";
  @ViewChild(DataTableDirective)
  // dtElement: DataTableDirective;
  datatableElement: DataTableDirective;
  monhocList: any = [];
  dtOptions: any = {};
  data : any;
  flag : any ="0";
  dtTrigger: Subject<any> = new Subject();
  public form: FormGroup;
  public form1: FormGroup;
  newsub: newsubject = {} as newsubject;
  updatesub: newsubject = {} as newsubject;
  constructor(private fb: FormBuilder, private myservicesService: MyservicesService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      code: [this.newsub.code, Validators.compose([Validators.required])],
      name: [this.newsub.name, Validators.compose([Validators.required])]
    });
    this.form1 = this.fb.group({
      code: [this.updatesub.code],
      name: [this.updatesub.name, Validators.compose([Validators.required])]
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
    this.myservicesService.getAll()
    .subscribe(res => {
      this.monhocList = res;
      console.log(res);
      this.dtTrigger.next();
    });
  }
  selectedSub: any;
  i;
  filterBySubName(subname): void {
    this.selectedSub = subname;
    // console.log(this.selectedSub)
    this.i = this.selectedSub.split(":");
    // console.log("this.i[1]: "+this.i[1])
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const name = data[2].toString(); // use data for the id column
    // console.log("selec: "+this.selectedSub)
          if(this.i[0] == 0){
            // console.log(name+" "+this.selectedSub);
          dataIndex = this.monhocList;
          return true;
        } 
      if(this.i[1].trim() == name){
      // console.log(this.monhocList.find(x => x.ten == name));
      // console.log(this.monhocList.filter(x => x.ten == name))[0];
      dataIndex = this.monhocList.find(x => x.ten == name);
      // console.log(dataIndex)
        return true;
      } 
    });
    // this.dtOptions['drawCallback']
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    $.fn['dataTable'].ext.search.pop();
  }
  GetAll(){
    this.myservicesService.getAll().subscribe(res => 
    {
      this.monhocList=res;
      this.dtTrigger.next();
    }); 
  }
  checkSubCode = false;
  Check(){
    for(let i of this.monhocList){
      // console.log(i.ma)
      if(this.newsub.code == i.ma){ 
        this.checkSubCode = true;
        this.errorms = "Code already use"; 
        break;
      }
      else {this.checkSubCode=false;}
    }
  }
  Add(subName)
  {
    this.Check();
    console.log(this.newsub.code + " "+ this.newsub.name);
    if(this.checkSubCode==false){
      var today = new Date();
      let tmp = new Monhoc(this.id,this.newsub.code,this.newsub.name,true,false,13,today,4,today,'');
      this.myservicesService.add(tmp).subscribe(data => {
        this.monhocList.push(data);
        console.log(this.monhocList);
      },
      res => {
        console.log(res.error.text);
        this.errorms = res.error.text;
      });
      this.checkSubCode = false;
    }
    else{
      this.errorms = "Code already use";
    }
  }
  public Index;
  public id;
  public ma;
  public ten;
  public ht;
  hthi: boolean;
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
  Changed(index, event){
    this.Value(index);
    this.hthi = event.target.checked;
    console.log(this.hthi);
    var today = new Date();
    let temp = new Monhoc(this.id,this.ma,this.ten,this.hthi,false,4,today,13,today,'');
    this.myservicesService.update(this.id,temp).subscribe(id =>{
      this.monhocList.splice(index,1,temp);
    });
  }
  Delete(){
    this.myservicesService.delete(this.id).subscribe(data=>
    {
      this.monhocList.splice(this.Index,1,);
      console.log(this.monhocList);
    });
  }
  Update(subcode){
    var today = new Date();
    let tmp = new Monhoc(this.id,subcode.value,this.updatesub.name,this.ht,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(data =>{
      this.monhocList.splice(this.Index,1,tmp);
      console.log(this.id);
    });
  }
}

