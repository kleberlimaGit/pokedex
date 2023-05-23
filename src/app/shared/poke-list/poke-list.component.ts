import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  offset: number = 0;

  limit: number = 6;

  public totalPokemonsRecord:any = 0;

  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeApi.apiListAllPokemons("").subscribe((res) => {
      this.getAllPokemons = res.results;
     this.totalPokemonsRecord = res.count

     console.log(this.totalPokemonsRecord)
    });
  }


  public getSearch(event: any){
    this.getAllPokemons = []
    const nomePokemon:string = event.trim().length > 0 ? `/${event}` : ""
    this.pokeApi.apiListAllPokemons(nomePokemon).subscribe((res) => {
      if(res.results === undefined){
        const pokemon = {
          name: res.name,
          url: '',
          status: res
        }
        this.getAllPokemons.push(pokemon)
        this.totalPokemonsRecord = 1
      }else {
        this.getAllPokemons = res.results
        this.totalPokemonsRecord = res.count
      }
    })
  }

  onPageChange(event:any) {
    console.log(event)
    this.offset = event.first;
    this.limit = event.rows;
}
}
