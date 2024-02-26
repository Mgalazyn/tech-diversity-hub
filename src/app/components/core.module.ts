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
import { ResponsiveTeamComponent } from './responsive_team/responsive-team/responsive-team.component';
import { CenterComponent } from './center/center.component';



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
    ResponsiveTeamComponent],
  exports: [
      CenterComponent,
      FooterComponent, 
      heroComponent, 
      MissionComponent,
      NavbarComponent,
      PartnershipComponent,
      ProjectsComponent,
      SocialsComponent,
      TeamComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
