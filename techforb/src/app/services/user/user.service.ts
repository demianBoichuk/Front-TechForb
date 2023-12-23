import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../helper';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient : HttpClient) { }

public register(user:any){
  return this.httpClient.post(`${baseUrl}/user/newUser`,user);

}
public login(user:User): Observable<any>{
  return this.httpClient.post(`${baseUrl}/user/login`,user);

}


}
