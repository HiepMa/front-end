import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { Type_Question } from '../../models/type_question.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';
import {FormGroup, Validators,FormBuilder}from '@angular/forms'

const apiName= 'loai_ch';
export interface uptype{
  name: string;
}
@Component({
    templateUrl:'type_questions.component.html'
})
export class Type_QuestionsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
    typeList: any;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    public form: FormGroup;
    upt: uptype = {} as uptype;
    constructor(private fb: FormBuilder, private myservicesService: MyservicesService) {}
    ngOnInit(): void {
      this.form = this.fb.group({
        name: [this.upt.name, Validators.compose([Validators.required])]
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
        this.typeList = res;
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
    public hienthi;
    hthi: boolean;
    Value(index)
    {
      this.Index = index;
      this.id = this.typeList[index].id;
      this.ma = this.typeList[index].maLoai;
      this.ten = this.typeList[index].tenLoai;
      this.hienthi = this.typeList[index].hienThi;
    }
   
    Changed(index, event){
      this.Value(index);
      this.hthi = event.target.checked;
      console.log(this.hthi);
      var today = new Date();
      let temp = new Type_Question(this.id,this.ma,this.ten,this.hthi,'');
      this.myservicesService.update(this.id,temp).subscribe(id =>{
        this.typeList.splice(index,1,temp);
      });
    }
    Update(){
      let tmp = new Type_Question(this.id,this.ma,this.upt.name,this.hienthi,'');
      this.myservicesService.update(this.id,tmp).subscribe(data=>{
        this.typeList.splice(this.Index,1,tmp);
      });
    }
}