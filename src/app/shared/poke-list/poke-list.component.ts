import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';
import { of, map, catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  public offset: number = 0;
  public limit: number = 6;
  public isLoading:boolean = false
  public totalPokemonsRecord:any = 0;
  public isError = false
  public totalLoadingPokemonsPerPage: number[] = []
  constructor(private pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.isLoading = true
    this.isError = false
    this.totalLoadingPokemonsPerPage = Array(6).map((x,i)=>i);
    this.pokeApi.apiListAllPokemons("", this.offset, this.limit).subscribe({
      next: (res) => {
        this.getAllPokemons = res.results;
        this.totalPokemonsRecord = res.count
        this.isLoading = false
      },
      error: (err) => {
        this.isError = true
      }
    });
  }


public getSearch(event: any) {
  this.getAllPokemons = [];
  const nomePokemon: string = event.trim().length > 0 ? `/${event}` : "";
  this.isLoading = true
  this.isError = false
    this.pokeApi.apiListAllPokemons(nomePokemon.toLowerCase(), this.offset, this.limit)
      .subscribe({
        next: (res) => {
          this.isError = false
          this.isLoading = false
          if (res.results === undefined) {
            const pokemon = {
              name: res.name,
              url: '',
              status: res
            };
            this.getAllPokemons.push(pokemon);
            this.totalPokemonsRecord = 1;
          } else {
            this.getAllPokemons = res.results;
            this.totalPokemonsRecord = res.count;
            this.offset = 0;
            this.limit = 6;
          }
        },
        error: (err) => {
          this.isError = true
        }
      });

  }

  onPageChange(event:any) {
    this.offset = event.first
    this.limit = event.rows
    this.isLoading = true
    this.pokeApi.apiListAllPokemons("", this.offset, this.limit).subscribe((res) => {
      this.getAllPokemons = res.results;
     this.totalPokemonsRecord = res.count
     this.isLoading = false
    });
}
}
