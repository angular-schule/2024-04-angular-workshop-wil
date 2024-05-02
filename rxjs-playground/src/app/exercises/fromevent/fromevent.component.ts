import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime, delay } from 'rxjs';

@Component({
  templateUrl: './fromevent.component.html',
  standalone: true
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      map(e => (e.target as Window).innerWidth),
      debounceTime(1000),
      startWith(999),
      startWith(111),
    )
    .subscribe(width => this.currentWidth = width)


    /******************************/
  }

}
