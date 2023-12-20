import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: User= new User();
  constructor(private userService:UserService, private router:Router, private snack:MatSnackBar){}
  ngOnInit(): void {
    
  }

  login(){
    console.log(this.usuario);
    if(this.usuario.dni == null ){
      this.snack.open("Completar DNI", "Aceptar",{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'center'
      });
      return;
     
    }
    if(this.usuario.password == null || this.usuario.password==""){
      this.snack.open("Completar Clave", "Aceptar",{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'center'
      });
      return;
  }

  this.userService.login(this.usuario).subscribe(
    (data)=>{
      console.log("usuario:",data);
      Swal.fire({title: 'Usuario correcto',
      text: 'Inicio de sesión correcto',
      icon: "success"})
    },(error)=>{
      console.log(error);
      Swal.fire({title: 'Usuario incorrecto',
      text: 'Datos incorrectos',
      icon: "error"});
    }
  )
}
onSubmit(){
  this.login();
}

volverAIndex(){
  //this.router.navigate(['index'])
}
}
