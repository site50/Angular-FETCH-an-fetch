import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [`.her-det{background-color:pink}`]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined;
  constructor() { }
  ngOnInit() {
  }
}
