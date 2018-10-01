import { Component, ViewChild, OnInit, OnDestroy  } from '@angular/core';
import { GiaoVien } from '../../models/catelogy/giaovien.class';
import { MyservicesService } from '../../services/myservices.service';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { LoginResq } from '../../models/loginrequest.class';
import { loginResp } from '../../models/loginrespone.class';

const apiName = 'auth/token';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 
  constructor(private myservicesService: MyservicesService) {}
  log : LoginResq;
  resp : any;
  ngOnInit(): void {
    this.myservicesService.getApiName(apiName);
  }
  login(usn,pass)
  {
    let tmp = new LoginResq(usn.value,pass.value);
    console.log(tmp);
    this.myservicesService.add(tmp).subscribe(tmp=>{console.log(tmp);});
  }

}
