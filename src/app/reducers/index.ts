import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import * as fromLogin from './login.reducer';
import * as fromRegister from './register.reducer';
import * as fromPokemon from './pokemon.reducer';
import { PokemonModel } from '../models/pokemon.model';

export interface AppState {
  userInfo: UserModel;
  registeredUsers: UserModel[];
  pokemonList: PokemonModel;
}

export const reducers: ActionReducerMap<AppState> = {
  userInfo: fromLogin.reducer,
  registeredUsers: fromRegister.reducer,
  pokemonList: fromPokemon.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
