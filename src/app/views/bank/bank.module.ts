// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { BankRoutingModule } from './bank-routing.module';
import {QuestionsComponent} from './questions.component';
import {Type_QuestionsComponent} from './type_questions.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BankRoutingModule,
      DataTablesModule
    ],
    declarations: [
      QuestionsComponent,
      Type_QuestionsComponent
    ]
  })
  export class BankModule { }