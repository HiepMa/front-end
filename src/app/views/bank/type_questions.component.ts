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
    public ten;
    Value(ma,index)
    {
      this.Index = index;
      this.id = ma;
      this.ten = this.typeList[index].tenLoai;
    }
   
    Update(typeName){
      let tmp = new Type_Question(this.id,'',typeName.value,true,'');
      this.myservicesService.update(this.id,tmp).subscribe(id=>{
        this.typeList.splice(this.Index,1,tmp);
      });
    }
}