import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { heroComponent } from './hero/hero.component';
import { MissionComponent } from './mission/mission.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialsComponent } from './socials/socials.component';
import { TeamComponent } from './team/team.component';
import { ResponsiveTeamComponent } from './responsive_team/responsive-team.component';
import { CenterComponent } from './center/center.component';
import { quotesComponent } from './quotes/quotes.component';
import { Projects2Component } from './projects2/projects2.component';
import { Mission2Component } from './mission2/mission2.component';



@NgModule({
  declarations: [
    CenterComponent,
    FooterComponent, 
    heroComponent, 
    MissionComponent,
    NavbarComponent,
    PartnershipComponent,
    ProjectsComponent,
    SocialsComponent,
    TeamComponent,
    ResponsiveTeamComponent,
    quotesComponent,
    Projects2Component,
    Mission2Component],
  exports: [
      CenterComponent,
      FooterComponent, 
      heroComponent, 
      MissionComponent,
      NavbarComponent,
      PartnershipComponent,
      ProjectsComponent,
      SocialsComponent,
      TeamComponent,
      ResponsiveTeamComponent,
      quotesComponent,
      Projects2Component,
      Mission2Component],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
