import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userurl ="http://localhost:8081/api/user/profile/me"

  private url_wishlist = "http://localhost:8081/api/v1/wishlist/add"

  private url_profilet = "http://localhost:8081/api/user/profile/update"
  auth_token = localStorage.getItem('token');

  

  constructor(private http: HttpClient,private authservice : AuthService) { }



  getUserloginData(){

    const _auth_token =  JSON.stringify (this.authservice.getToken());

    console.log(_auth_token);

    
  const token_parse  =JSON.parse(_auth_token)

  console.log(token_parse)

   const  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_parse}`
    });
  
  const  requestOptions = { headers: headers };


    return this.http.get(this.userurl,requestOptions);
  }


   updateUser(userdata:any){

    const _auth_token =  JSON.stringify (this.authservice.getToken());

    console.log(_auth_token);

    
  const token_parse  =JSON.parse(_auth_token)

  console.log(token_parse)
    const  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_parse}`
    });
  
  const  requestOptions = { headers: headers };


      return this.http.post(this.url_profilet,userdata,requestOptions);
   }

  addWishlist(prod:any) {
    const _auth_token =  JSON.stringify (this.authservice.getToken());

    console.log(_auth_token);

    
  const token_parse  =JSON.parse(_auth_token)

  console.log(token_parse)
    const  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token_parse}`
    });
  
  const  requestOptions = { headers: headers };


      return this.http.post(this.url_wishlist,prod,requestOptions);
  }


}
