import { Blockchain } from '../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export function addCoinReducer(state: Blockchain[] = [], action) {
    switch (action.type) {
        case "ADD_COIN":
            return [...state, action.payload]
        case "DELETE_COIN":
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}