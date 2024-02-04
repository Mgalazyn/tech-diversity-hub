import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { MissionComponent } from './components/mission/mission.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialsComponent } from './components/socials/socials.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    FooterComponent,
    MissionComponent,
    NavbarComponent,
    PartnershipComponent,
    ProjectsComponent,
    SocialsComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
