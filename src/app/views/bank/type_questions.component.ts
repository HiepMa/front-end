import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { Type_Question } from '../../models/type_question.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';

const apiName= 'loai_ch';
@Component({
    templateUrl:'type_questions.component.html'
})
export class Type_QuestionsComponent implements OnInit, OnDestroy {
    typeList: any;
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
        this.typeList = res;
        console.log(res);
        this.dtTrigger.next();
      });
    }
  
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
    public id;
    Value(ma)
    {
      this.id = ma;
    }
   
    Update(typeName){
      let tmp = new Type_Question('',typeName.value,true,'');
      this.myservicesService.update(this.id,tmp).subscribe(id=>{
        console.log(tmp);
      });
    }
}