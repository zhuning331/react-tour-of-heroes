import http from '../util/http-common';
import Hero from '../types/hero';

const heroesUrl = '/heroes';

const getHeroes = () => http.get(heroesUrl);

const getHero = (id: number) => http.get(`${heroesUrl}/${id}`);

const addHero = (hero: Hero) => http.post(heroesUrl, hero);

const updateHero = (hero: Hero) => http.put(`${heroesUrl}/${hero.id}`, hero);

const deleteHero = (id: number) => http.delete(`${heroesUrl}/${id}`);

const searchHero = (term: string) => http.get(`${heroesUrl}?q=${term}`);

const heroService = {
    getHeroes,
    getHero,
    addHero,
    updateHero,
    deleteHero,
    searchHero
};

export default heroService;