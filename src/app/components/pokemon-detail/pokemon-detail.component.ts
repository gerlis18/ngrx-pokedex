import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';
import { PokemonList } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokeService: PokeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon$ = this.pokeService.getPokemonById(id);
  }

  onSearchPokemon(pokes: PokemonList[]) {
    if (pokes && pokes.length > 0) {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    }
  }

}
