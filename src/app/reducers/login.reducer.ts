import { UserModel } from '../models/user.model';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as loginActions from '../actions/login.actions';
import { AppState } from './index';

const initialState: UserModel = {
  email: '',
  password: '',
  username: ''
};

const loginReducer = createReducer(
  initialState,
  on(loginActions.login, (state, { credentials }) =>
    ({ email: credentials.email, password: credentials.password }))
);

export function reducer(state: UserModel | undefined, action: Action) {
  return loginReducer(state, action);
}

const selectUsers = (state: AppState) => state.registeredUsers;

export const loginUser = createSelector(
  selectUsers,
  (users: UserModel[], props: UserModel) => {
    return users.find(user => user.email === props.email && user.password === props.password);
  }
);
