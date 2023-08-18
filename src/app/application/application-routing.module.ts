import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { MyvideosComponent } from './myvideos/myvideos.component';

const routes: Routes = [
  {
    path:'' , component: WelcomeComponent,
    
  },
  {
   path: 'vid/:id' , component : FormationdetailsComponent
  } ,
  {
    path: 'vid' , component: MyvideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
