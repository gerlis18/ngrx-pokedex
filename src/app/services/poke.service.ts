import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseAPI = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonList[]> {
    return this.http.get(`${this.baseAPI}/pokemon?limit=1000`)
      .pipe(map((res: any) => res.results));
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.baseAPI}/pokemon/${id}`);
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url);
  }
}
