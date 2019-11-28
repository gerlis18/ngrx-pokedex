import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon$: Observable<any>;

  constructor(private route: ActivatedRoute, private pokeService: PokeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon$ = this.pokeService.getPokemonById(id);
  }

}
