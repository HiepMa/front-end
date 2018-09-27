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
        this.monhocServices.add(tmp).subscribe();
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
  Update(subCode1,subName1){
    var today = new Date();
    let tmp = new Monhoc(subCode1.value,subName1.value,true,13,today,4,today,'');
    this.monhocServices.update(this.id,tmp).subscribe(id =>{
      console.log(id);
    });
  }

  ngOnInit() {
  }

}