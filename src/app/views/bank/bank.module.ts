// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { BankRoutingModule } from './bank-routing.module';
import {QuestionsComponent} from './questions.component'


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BankRoutingModule,
    ],
    declarations: [
      QuestionsComponent,
    ]
  })
  export class BankModule { }