// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
// Components Routing
import { CategoryRoutingModule } from './category-routing.module';


import {ExamineesComponent} from './examinees.component'
import {TeachersComponent} from './teachers.component'
import {ProfileComponent} from './profile.component'
import {SubjectsComponent} from './subjects.component'
import {PartsComponent} from './parts.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
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
