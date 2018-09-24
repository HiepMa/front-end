import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExamineesComponent} from './examinees.component';
import {TeachersComponent} from './teachers.component';
import {ProfileComponent} from './profile.component';
import {SubjectsComponent} from './subjects.component'
import {PartsComponent} from './parts.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category'
    },
    children: [
      {
        path: 'examinees',
        component: ExamineesComponent,
        data: {
          title: 'Examinees'
        }
      },
      {
        path: 'teachers',
        component: TeachersComponent,
        data: {
          title: 'Teachers'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'subjects',
        component: SubjectsComponent,
        data: {
          title: 'Subjects'
        }
      },
      {
        path: 'parts',
        component: PartsComponent,
        data: {
          title: 'Parts'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}
