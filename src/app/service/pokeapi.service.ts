import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  public apiListAllPokemons(pokemon:string, offset?:number, limit?:number): Observable<any> {
    if(pokemon.length == 0){
      return this.http.get<any>(this.url+`?offset=${offset}&limit=${limit}`).pipe(
        tap((res) => res),
        tap((res) => {
          console.log(res)
          res.results.map((resPokemons: any) => {
            this.apiGetPokemons(resPokemons.url).subscribe(
              (res) => (resPokemons.status = res)
            );
          });
        })
      );
    }else {
      return this.http.get<any>(this.url+`${pokemon}`);
    }
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
