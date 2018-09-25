import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {QuestionsComponent} from './questions.component';
import {Type_QuestionsComponent} from './type_questions.component';

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Bank'
      },
      children: [
        {
          path: 'questions',
          component: QuestionsComponent,
          data: {
            title: 'Questions'
          }
        },
        {
          path: 'type_questions',
          component: Type_QuestionsComponent,
          data: {
            title: 'Type_Questions'
          }
        },
      ]
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BankRoutingModule {}
  