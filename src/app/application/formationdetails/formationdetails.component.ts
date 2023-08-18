import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private videoservice: VideosService , private route : ActivatedRoute ,private userservice:UserService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
         console.log(params.id);
         let _id :Number = params.id
         this.id=params.id

         this.getFormationById(_id);
         
    });

    this.getFormationById(this.id);

    console.log(this.formation);
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

}
