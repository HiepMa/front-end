import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { Type_Question } from '../../models/type_question.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { DataTableDirective } from 'angular-datatables';

const apiName= 'loai_ch';
@Component({
    templateUrl:'type_questions.component.html'
})
export class Type_QuestionsComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
    typeList: any;
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
    hthi: boolean;
    Value(indexid,index)
    {
      this.Index = index;
      this.id = this.typeList[index].id;
      this.ma = this.typeList[index].ma;
      this.ten = this.typeList[index].tenLoai;
    }
   
    Changed(indexid, index, event){
      this.Value(indexid,index);
      this.hthi = event.target.checked;
      console.log(this.hthi);
      var today = new Date();
      let temp = new Type_Question(this.id,this.ma,this.ten,this.hthi,'');
      this.myservicesService.update(this.id,temp).subscribe(id =>{
        this.typeList.splice(index,1,temp);
      });
    }
    Update(typeName){
      let tmp = new Type_Question(this.id,'',typeName.value,this.hthi,'');
      this.myservicesService.update(this.id,tmp).subscribe(data=>{
        this.typeList.splice(this.Index,1,tmp);
      });
    }
}