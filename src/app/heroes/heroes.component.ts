import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`.hero{background-color:coral; height: 23rem;}.heroes{background-color: aqua;}`]
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  hero = 0;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getHeroes();

  }
  onSelect5(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }
}
