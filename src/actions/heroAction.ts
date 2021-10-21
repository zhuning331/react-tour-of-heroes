import Hero from '../types/hero';

export const SET_HERO = 'SET_HERO';
export const SET_HEROES = 'SET_HEROS';

export interface ISetHeroAction {
    type: string;
    payload: {
        newHero: Hero;
    }
}

export const setHero = (newHero: Hero): ISetHeroAction => ({
    type: SET_HERO,
    payload: {
        newHero
    }
});

export const setHeroes = (newHero: Hero): ISetHeroAction => ({
    type: SET_HEROES,
    payload: {
        newHero
    }
});