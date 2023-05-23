import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit{
  
  @Output() public emitSearch:EventEmitter<Event> = new EventEmitter();
  public searchPokemon:string = "";
  
  constructor(){

  }
  ngOnInit(): void {
  }

  public search(value: any){
    this.emitSearch.emit(value.target.value)
    this.searchPokemon = ""
  }
}
