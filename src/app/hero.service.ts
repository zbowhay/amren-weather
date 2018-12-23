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

  private writeMessage(msg: string): void {
    this._messageService.add(`HeroService: ${msg}`);
  }
}
