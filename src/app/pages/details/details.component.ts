import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species';
  public  pokemon: any;
  public isLoading:boolean = false
  constructor(
    private activevedRouter: ActivatedRoute,
    private apiPokemon: PokeapiService
  ) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activevedRouter.snapshot.params['id'];
    const pokemon = this.apiPokemon.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.apiPokemon.apiGetPokemons(`${this.urlName}/${id}`);

    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
      }
    )
    return;
  }
}
