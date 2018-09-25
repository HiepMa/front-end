import { Component, OnInit } from '@angular/core';
import { MonhocService } from '../../services/monhoc.service';
import { Monhoc } from '../../models/monhoc.class';

@Component({
  selector: 'app-subject',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit {
  monhocList: any;
  constructor(private monhocServices: MonhocService) {
    this.monhocServices.getAll().subscribe((res) => {this.monhocList=res}); 
  }
 
  Add(subCode,subName)
  {
        var today = new Date();
        let tmp = new Monhoc(subCode,subName,true,13,today,4,today,'');
        console.log(tmp);
        this.monhocServices.add(tmp).subscribe(data=>{
        console.log(data);
    })
  }

  ngOnInit() {
  }

}