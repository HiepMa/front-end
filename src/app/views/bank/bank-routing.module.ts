import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {QuestionsComponent} from './questions.component';

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
      ]
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BankRoutingModule {}
  