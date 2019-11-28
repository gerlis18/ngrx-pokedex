import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/user.model';

export const register = createAction('[Register page] register user', props<{credentials: UserModel}>());
