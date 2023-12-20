import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: User= new User();
  constructor(private userService:UserService, private router:Router, private snack:MatSnackBar){}
  ngOnInit(): void {
    
  }

  saveUser(){
    console.log(this.usuario);
    if(this.usuario.dni == null || this.usuario.email == null || this.usuario.password == null){
      this.snack.open("Completar todos los campos", "Aceptar",{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'center'
      });
      return;
     
    }
    this.userService.register(this.usuario).subscribe(
      (data)=>{
        console.log("usuario:",data);
        Swal.fire({title: 'Usuario guardado',
        text: 'Usuario creado correctamente',
        icon: "success"})
      },(error)=>{
        console.log(error);
        this.snack.open("Email o DNI en uso", "Aceptar",{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition:'center'
        });
      }
    )
      
  }
onSubmit(){
  this.saveUser();
}

volverAIndex(){
  //this.router.navigate(['index'])
}
}
