import { Action } from '@ngrx/store';
import { ActionTypes } from './signup.actions';

// TODO Move SubmitSignup service to event observable.
export const initialState = {"signupForm": {}};

export function signupReducer(state = initialState, action: Action) {
switch (action.type) {
    default:
      return state;
}
}
