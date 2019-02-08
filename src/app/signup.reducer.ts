import { Action } from '@ngrx/store';
import { ActionTypes } from './signup.actions';

export const initialState = 0;

export function signupReducer(state = initialState, action: Action) {
switch (action.type) {
    default:
      return state;
}
}
