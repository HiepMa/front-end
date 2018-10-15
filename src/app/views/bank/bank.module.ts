// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components Routing
import { BankRoutingModule } from './bank-routing.module';
import {QuestionsComponent} from './questions.component';
import {Type_QuestionsComponent} from './type_questions.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BankRoutingModule,
      DataTablesModule,
      ReactiveFormsModule,
      LoadingBarHttpClientModule,
    ],
    declarations: [
      QuestionsComponent,
      Type_QuestionsComponent
    ]
  })
  export class BankModule { }