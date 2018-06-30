import { Component, OnInit } from '@angular/core';
//
import{AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
//
import swal from 'sweetalert2'

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public email:string;
  public pass: string;

  constructor(
    public authService: AuthService,
    public route : Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.pass)
    .then((res)=>{

      swal({
        position: 'center',
        type: 'success',
        title: 'Registro correcto !!!',
        showConfirmButton: false,
        timer: 1500
      })
      this.route.navigate(['/informe']);
      console.log(res);
    })
    .catch((error)=>{

      swal({
        position: 'center',
        type: 'error',
        title: 'Error en el regitro de cuenta !!!',
        showConfirmButton: false,
        timer: 3500
      })

      console.log(error)
    })
  }

}
