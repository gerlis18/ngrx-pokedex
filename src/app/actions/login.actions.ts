import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/user.model';

export const login = createAction('[Login page] user log in', props<{credentials: UserModel}>());
