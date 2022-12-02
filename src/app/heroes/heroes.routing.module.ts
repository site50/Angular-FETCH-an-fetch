import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
//import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'box', component: HeroesComponent },
  { path: ':id', component: HeroesComponent },
  { path: '', redirectTo: 'box', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
