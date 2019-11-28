import { UserModel } from '../models/user.model';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as registerActions from '../actions/register.actions';

const initialState: UserModel[] = [];

function addUser(state: UserModel[], credentials: UserModel) {
  return [...state, credentials];
}

const registerReducer = createReducer(
  initialState,
  on(registerActions.register, (state, { credentials }) => addUser(state, credentials)),
);

export function reducer(state: UserModel[] | undefined, action: Action) {
  return registerReducer(state, action);
}


export const selectUser = () => {
  return createSelector(
    (state, props) => state.registeredUsers,
    (users, props) => users.find(user => user.email === props.email)
  );
};
