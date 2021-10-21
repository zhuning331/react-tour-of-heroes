import { useState, Fragment, ChangeEvent } from 'react';
import SubTitle from '../../styles/SubTitle';
import { HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import Hero from '../../types/hero';
import HEROES from '../../mock-heroes';
import HeroDetail from '../hero-detail/HeroDetail';

const Heroes = () => {
    const [selectedHero, setSelectedHero] = useState<Hero>();
    const [heroes, setHeroes] = useState<Hero[]>(HEROES);

    return (
        <Fragment>
            <SubTitle>My Heroes</SubTitle>
            <HeroList>
                {heroes.map(hero =>
                    <HeroItem key={hero.id} onClick={() => setSelectedHero(hero)} selected={selectedHero && (hero.id === selectedHero.id)}>
                        <HeroBadge>{hero.id}</HeroBadge> {hero.name}
                    </HeroItem>)}
            </HeroList>
            {selectedHero && <HeroDetail hero={selectedHero} onHeroInputChange={(evt: ChangeEvent<HTMLInputElement>) => {
                setSelectedHero({...selectedHero, name: evt.target.value});
                setHeroes(heroes.map(hero => hero.id !== selectedHero.id ? hero : selectedHero));
            }} />}
        </Fragment>
    )
}

export default Heroes;
