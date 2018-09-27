import { Component, ViewChild  } from '@angular/core';
import { TypeQuestionService } from '../../services/type-question.service';
import { Type_Question } from '../../models/type_question.class';
@Component({
    templateUrl:'type_questions.component.html'
})
export class Type_QuestionsComponent{
    typeList: any;
    constructor(private type_questionServices: TypeQuestionService) {
      this.type_questionServices.getAll().subscribe((res) => {this.typeList=res}); 
    }
    public id;
    Value(ma)
    {
      this.id = ma;
    }
   
    Update(typeName){
      let tmp = new Type_Question('',typeName.value,true,'');
      this.type_questionServices.update(this.id,tmp).subscribe(id=>{
        console.log(tmp);
      });
    }
}