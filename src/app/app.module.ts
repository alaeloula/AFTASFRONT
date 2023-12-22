import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberComponent } from './component/member/member.component';
import { AddMemberComponent } from './component/add-member/add-member.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { AddLevelComponent } from './component/add-level/add-level.component';
import { LevelsComponent } from './component/levels/levels.component';

import { AddCompetitionComponent } from './component/add-competition/add-competition.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common'
import { CompetitionComponent } from './component/competition/competition.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { AddRankingComponent } from './component/add-ranking/add-ranking.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule
({
  declarations: [
    AppComponent,
    MemberComponent,
    AddMemberComponent,
    NavbarComponent,
    AddLevelComponent,
    LevelsComponent,
    AddCompetitionComponent,
    HomeComponent,
    FooterComponent,
    CompetitionComponent,
    RankingComponent,
    AddRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DialogModule,
    ButtonModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
