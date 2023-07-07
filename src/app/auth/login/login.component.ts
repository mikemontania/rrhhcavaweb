import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';
 
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  recuerdame: boolean = false;

  auth2: any;

  constructor(
    public router: Router,

    public _loginService: LoginService
  ) { }

  ngOnInit() { 
    /*   this.googleInit(); */

    this.username = localStorage.getItem('username') || '';
    if (this.username.length > 1) {
      this.recuerdame = true;
    }

  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
   /*  Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    }); */
    Swal.showLoading();

    let user = new User(0, 0, 0, '', 'null', 'null', forma.value.username, forma.value.password, null, 'null', 0, 0, 0);
    this._loginService.login(user, forma.value.recuerdame)
      .subscribe(correcto => {
        this.router.navigate(['/dashboard']);
        Swal.close();
      });
  }

}
