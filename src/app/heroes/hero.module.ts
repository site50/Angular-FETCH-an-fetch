import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroRoutingModule } from './heroes.routing.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HeroRoutingModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },

    ),],
  declarations: [HeroesComponent, HeroDetailComponent],
  providers: [HeroService]
})
export class HeroModule { }
