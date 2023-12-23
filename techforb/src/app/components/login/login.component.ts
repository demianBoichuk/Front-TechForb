import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
      if (data !==null){
        data as User;
      console.log("el user es ",data)
      localStorage.setItem('idUser', data.idUser)
      console.log("el id local es: ",localStorage.getItem('idUser'))
      Swal.fire({title: 'Usuario correcto',
      text: 'Inicio de sesión correcto',
      icon: "success"})
       // this.router.navigate(['admin/',dato.idUsuario,dato.rol])
       this.router.navigate(['home'])
      }
     
      
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

registrarse(){
  this.router.navigate(['register'])
}
}
