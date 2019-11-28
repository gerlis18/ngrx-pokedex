import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';
import * as fromLogin from './login.reducer';
import * as fromRegister from './register.reducer';

export interface AppState {
  userInfo: UserModel;
  registeredUsers: UserModel[];
}

export const reducers: ActionReducerMap<AppState> = {
  userInfo: fromLogin.reducer,
  registeredUsers: fromRegister.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
