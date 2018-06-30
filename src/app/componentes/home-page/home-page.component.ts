import { Component, OnInit } from '@angular/core';

//
import{AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
//
import swal from 'sweetalert2';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public email:string;
  public pass: string;

  constructor(
    public authService: AuthService,
    public route : Router
  ) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.loginEmail(this.email, this.pass)
    .then((res) => {

      swal({
        position: 'center',
        type: 'success',
        title: 'Bienvenido!!!',
        showConfirmButton: false,
        timer: 1500
      })

      this.route.navigate(['/privado']);
    })
    .catch((err) =>{
      this.route.navigate(['/login']);
      console.log(err);
    })
  }

}
