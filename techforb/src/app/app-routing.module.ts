import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoutComponent } from './components/logout/logout.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent} ,
  {path:'login',component:LoginComponent}  ,
  {path:'home',component:NavigationComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
