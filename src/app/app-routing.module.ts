import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CompetitionComponent } from './component/competition/competition.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { AddRankingComponent } from './component/add-ranking/add-ranking.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"competition",component:CompetitionComponent},
  {path:"addranking/:id",component:AddRankingComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
