import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokeList: Observable<any>[] = [];

  constructor(private pokeService: PokeService) { }

  ngOnInit() {
    this.pokeService.getPokemons()
      .subscribe((res: any) => {
          res.results.map(info => {
            this.pokeList.push(this.pokeService.getPokemonByUrl(info.url));
          });
        });
  }
}
