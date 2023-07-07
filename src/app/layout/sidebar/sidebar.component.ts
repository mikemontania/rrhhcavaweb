import { Component, OnInit } from '@angular/core';

import { SidebarService  } from '../../services/service.index'; 
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  user: any={};

  constructor(
    public _sidebar: SidebarService,
    public _loginService: LoginService
  ) { }

  ngOnInit() {
    this.user = this._loginService.user;
  }

  permitirAcceso(roleUser:any, roleItem:any) {
    let permitido = false;


    if (roleItem == '') {
      permitido = true;
    } else {

      const excludeRol ='!' + roleUser;
      if (roleItem.indexOf(excludeRol) > -1) {
        permitido = false;
      } else {
        permitido = true;
      }
    }
 
    return permitido;
  }

}
