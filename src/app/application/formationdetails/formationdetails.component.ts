import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favourite } from 'src/app/models/favourite';
import { UserService } from 'src/app/services/user.service';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-formationdetails',
  templateUrl: './formationdetails.component.html',
  styleUrls: ['./formationdetails.component.scss']
})
export class FormationdetailsComponent implements OnInit {


   formationdetails:any ;
   formation:any;
   id :number=1 ;
   userId =Number(localStorage.getItem("user_id"));
   user :any;
   favourite:Favourite[]=[];
  constructor(private videoservice: VideosService , private route : ActivatedRoute ,private userservice:UserService,private http:HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
         console.log(params.id);
         let _id :Number = params.id
         this.id=params.id

         this.getFormationById(_id);
         
    });
    this.getUserData();

    this.getFormationById(this.id);

    console.log(this.formation);
  }







  getUserData(){
    this.userservice.getUserloginData().subscribe(res=>{

      this.user = res ;
      console.log(res);
      console.log(this.user.id);
      localStorage.setItem("user_id",this.user.id);

     this.userId = this.user.id;

    })

    
}

  getFormationById(id:Number){

    this.videoservice.getFormationById(id)
    .subscribe(res=>{
       this.formationdetails =res;
    });

    this.videoservice.getformationapiclient(id).subscribe(res=>{
       this.formation=res;
    })

  }


  addFormationtowishlist(){

    this.userservice.addWishlist(this.formation).subscribe(res=>{
        console.log(res);
    })

      
  }

  download(){
     this.http.get("http://localhost:8081/api/v1/cleint/downloadFile/" + this.id).subscribe(res=>{
       console.log(res);
       alert("download success");
       localStorage.setItem("filedownload " + this.id ,this.id.toString());
       window.location.reload();

     })
  }





  // loadWishlist(): void {
  //   this.userservice.getUserWishlist(this.userId)
  //     .subscribe(wishlist => {
  //       this.wishlist = wishlist;
  //     });
  // }

  addToWishlist(): void {
    const wishlistItem: Favourite = {
      userId:  this.userId,
      formation:this.formation
    };

    this.userservice.addToWishlist(this.userId, wishlistItem)
      .subscribe(() => {
     
      });
  }










}
