import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../../services/monhoc.service';

@Component({
  selector: 'app-todo',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit {
  monhocList: any;
  constructor(private monhocServices: MonhocService) {
    this.monhocServices.getAll().subscribe((res) => {this.monhocList=res}); 
  }

  ngOnInit() {
  }

}