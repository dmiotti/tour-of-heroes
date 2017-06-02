import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROS: Hero[] = [
  { id: 11, name: "David M" },
  { id: 12, name: "Guillaume Dufloux" },
  { id: 13, name: "Clément Driollet" },
  { id: 14, name: "Théo Pauliat" },
  { id: 15, name: "Stephen Vinouze" },
  { id: 16, name: "Alexis Ardouin" },
  { id: 17, name: "Maxime de Chalendar" },
  { id: 18, name: "Bastien Gillet" },
  { id: 19, name: "Antony Body" },
  { id: 20, name: "Pierre le Poulain" }
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heros"
        (click)="onSelect(hero)"
        [class.selected]="hero == selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent  {
  title = 'Tour of Heros';
  heros = HEROS;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
