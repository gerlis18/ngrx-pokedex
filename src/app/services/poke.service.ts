import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseAPI = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`${this.baseAPI}/pokemon?limit=1000`);
  }

  getPokemonById(id: number) {
    return this.http.get(`${this.baseAPI}/pokemon/${id}`);
  }

  getPokemonByUrl(url: string) {
    return this.http.get(url);
  }
}
