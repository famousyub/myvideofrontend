import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideosectionComponent } from './videosection/videosection.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    MyvideosComponent,
    WelcomeComponent,
    VideosectionComponent,
    FormationdetailsComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    MyvideosComponent,
    WelcomeComponent,
    VideosectionComponent
  ]
})
export class ApplicationModule { }
