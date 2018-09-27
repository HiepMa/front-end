import { Component, ViewChild  } from '@angular/core';
import { PartsService } from '../../services/catelogy/parts.service';
import {Parts} from '../../models/catelogy/parts.class';
@Component({
    templateUrl:'parts.component.html'
})
export class PartsComponent{
    partList: any;
  constructor(private partServices: PartsService) {
    this.partServices.getAll().subscribe((res) => {this.partList=res}); 
  }
  public id;
  Value(ma)
  {
    this.id = ma;
  }
  Add(partCode,partName,partSub)
  {
        var today = new Date();
        let tmp = new Parts(partSub.value,partCode.value,partName.value,true,13,today,4,today,'');
        console.log(tmp);
        this.partServices.add(tmp).subscribe(id=>{
            console.log(tmp);
        });
  }
  Delete(){
    this.partServices.delete(this.id).subscribe(id=>{
      console.log(id);
    }); 
  }
  Update(partCodee,partNamee,partSube){
    var today = new Date();
    let tmp = new Parts(partSube.value,partCodee.value,partNamee.value,true,13,today,4,today,'');
    this.partServices.update(this.id,tmp).subscribe(id =>{
      console.log(id);
    });
  }
  ngOnInit() {
  }
}