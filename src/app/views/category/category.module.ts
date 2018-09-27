// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
// Components Routing
import { CategoryRoutingModule } from './category-routing.module';


import {ExamineesComponent} from './examinees.component'
import {TeachersComponent} from './teachers.component'
import {ProfileComponent} from './profile.component'
import {SubjectsComponent} from './subjects.component'
import {PartsComponent} from './parts.component'




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    DataTablesModule,
  ],
  declarations: [
    ExamineesComponent,
    TeachersComponent,
    ProfileComponent,
    SubjectsComponent,
    PartsComponent,
  ]
})
export class CategoryModule { }
