import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.writeMessage('heroes fetched!');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: write to message service AFTER the hero is fetched.
    this.writeMessage(`fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  private writeMessage(msg: string): void {
    this._messageService.add(`HeroService: ${msg}`);
  }
}
