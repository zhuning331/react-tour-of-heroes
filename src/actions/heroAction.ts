import { Dispatch } from 'redux';
import Hero from '../types/hero';
import heroService from '../services/heroService';
import { addMessage } from './messageAction';

export const SET_HERO = 'SET_HERO';
export const SET_HEROES = 'SET_HEROS';

export const GET_HEROES = 'GET_HEROES';
export const GET_HERO = 'GET_HERO';
export const UPDATE_HERO = 'UPDATE_HERO';

export interface ISetHeroAction {
    type: string;
    payload: any
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

export const getHeroes = () => async (dispatch: Dispatch) => {
    try {
        const res = await heroService.getHeroes();
        dispatch({
            type: GET_HEROES,
            payload: res.data
        });
        dispatch(addMessage('HeroService: fetched heroes'));
    } catch (error) {
        console.error(error);
    }
}

export const getHero = (id: number) => async (dispatch: Dispatch) => {
    try {
        const res = await heroService.getHero(id);
        dispatch({
            type: GET_HERO,
            payload: res.data
        });
        dispatch(addMessage(`HeroService: fetched hero id=${id}`));
    } catch (error) {
        console.error(error);
    }
}

export const updateHero = (hero: Hero) => async (dispatch: Dispatch) => {
    try {
        const res = await heroService.updateHero(hero);
        dispatch({
            type: UPDATE_HERO,
            payload: res.data
        });
        dispatch(addMessage(`HeroService: updated hero id=${hero.id}`));
    } catch (error) {
        console.error(error);
    }
}

export const deleteHero = (id: number) => async (dispatch: any) => {
    try {
        await heroService.deleteHero(id);
        dispatch(getHeroes());
        dispatch(addMessage(`HeroService: deleted hero id=${id}`));
    } catch (error) {
        console.error(error);
    }
}

export const addHero = (hero: Hero) => async (dispatch: any) => {
    try {
        const res = await heroService.addHero(hero);
        dispatch(getHeroes());
        dispatch(addMessage(`HeroService: added hero id=${res.data.id}`));
    } catch (error) {
        console.error(error);
    }
}