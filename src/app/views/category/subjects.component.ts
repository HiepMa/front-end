import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Monhoc } from '../../models/catelogy/monhoc.class';
import { MyservicesService} from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import { CheckResquest}  from '../../models/CheckResquest.class';

const apiName = 'monhoc';
export interface Data{
  thongbao : string,
    flag : string
}

@Component({
  selector: 'app-subject',
  templateUrl: './subjects.component.html'
})


export class SubjectsComponent implements OnInit, OnDestroy {
  CheckResq : CheckResquest;
  errorms : any ="";
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  monhocList: any = [];
  dtOptions: any = {};
  data : any;
  flag : any ="0";
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
  Check(subCode){
    this.CheckResq = new CheckResquest(subCode.value);
    this.myservicesService.addObj('monhoc/checkuser',this.CheckResq).subscribe(data =>{
      this.data = data;
      this.errorms = this.data.thongbao;
      this.flag = this.data.flag;
      console.log (this.flag+"0");
    });
  }
  Add(subCode,subName)
  {
    this.Check(subCode);
    console.log(this.flag+"1");
    setTimeout(
      function(){
        console.log(this.flag + "2");
        if(this.flag == "1") {
          var today = new Date();
          let tmp = new Monhoc(this.id,subCode.value,subName.value,true,false,13,today,4,today,'');
          this.myservicesService.add(tmp).subscribe(data => {
            this.monhocList.push(data);
            console.log(this.monhocList);
          },
        res => {
            console.log(res.error.text);
            this.errorms = res.error.text;
          });
        }
        this.flag = "0";
        console.log(this.flag + "3");
      },1000);
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
  Update(subCode1,subName1){
    var today = new Date();
    let tmp = new Monhoc(this.id,subCode1.value,subName1.value,this.hthi,false,13,today,4,today,'');
    this.myservicesService.update(this.id,tmp).subscribe(data =>{
      this.monhocList.splice(this.Index,1,tmp);
      console.log(this.id);
    });
  }
}

