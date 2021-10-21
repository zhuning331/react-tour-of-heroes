import { ISetHeroAction, SET_HERO, SET_HEROES } from '../actions/heroAction';
import HEROES from '../mock-heroes';
import Hero from '../types/hero';

export interface IHeroState {
    hero: Hero | undefined;
    heroes: Hero[];
}

const initialState: IHeroState = {
    hero: undefined,
    heroes: HEROES
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
        default:
            return state;
    }
}

export default heroReducer;