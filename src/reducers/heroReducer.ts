import { ISetHeroAction, SET_HERO, SET_HEROES, GET_HEROES, GET_HERO, UPDATE_HERO } from '../actions/heroAction';
import Hero from '../types/hero';

export interface IHeroState {
    hero: Hero | undefined;
    heroes: Hero[];
}

const initialState: IHeroState = {
    hero: undefined,
    heroes: []
}

const heroReducer = (state = initialState, action: ISetHeroAction): IHeroState => {
    switch (action.type) {
        case SET_HERO:
            return {
                ...state,
                hero: action.payload.newHero
            }
        case SET_HEROES:
            return {
                ...state,
                heroes: state.heroes.map(hero => hero.id !== action.payload.newHero.id ? hero : action.payload.newHero) 
            }
        case GET_HEROES:
            return {
                ...state,
                heroes: action.payload
            }
        case GET_HERO:
            return {
                ...state,
                hero: action.payload
            }
        case UPDATE_HERO:
            return {
                ...state
            }    
        default:
            return state;
    }
}

export default heroReducer;