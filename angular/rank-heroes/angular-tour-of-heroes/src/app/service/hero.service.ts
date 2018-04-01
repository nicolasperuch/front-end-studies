import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }
  
  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
