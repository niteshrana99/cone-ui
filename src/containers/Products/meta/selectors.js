import {initialProductState} from './reducer';

export const select = state => state.products || initialProductState;
export const selectVacations = state => select(state).products;