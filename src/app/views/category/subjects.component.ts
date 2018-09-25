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
  GetAll(){
    this.monhocServices.getAll().subscribe((res) => {this.monhocList=res}); 
  }
  Add(subCode,subName)
  {
        var today = new Date();
        let tmp = new Monhoc(subCode.value,subName.value,true,13,today,4,today,'');
        console.log(tmp);
        this.monhocServices.add(tmp).subscribe((res) => {this.monhocList =res} );
  }
  public id;
  Value(ma)
  {
    this.id = ma;
  }
  Delete(){
    this.monhocServices.delete(this.id).subscribe(id=>{
      console.log(id);
    }); 
  }

  ngOnInit() {
  }

}