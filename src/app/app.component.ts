import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`  
  <poke-header></poke-header>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'pokedex';
}
