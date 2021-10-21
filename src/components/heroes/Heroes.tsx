import { useState, Fragment } from 'react';
import SubTitle from '../../styles/SubTitle';
import { HeroInput, HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import Hero from '../../types/hero';
import HEROES from '../../mock-heroes';

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
            {selectedHero &&
                <Fragment>
                    <SubTitle>{selectedHero.name.toUpperCase()} Details</SubTitle>
                    <div><span>id: </span>{selectedHero.id}</div>
                    <div>
                        <label htmlFor="name">Hero name: </label>
                        <HeroInput id="name"  placeholder="name" value={selectedHero.name} onChange={evt => {
                            setSelectedHero({...selectedHero, name: evt.target.value});
                            setHeroes(heroes.map(hero => hero.id !== selectedHero.id ? hero : selectedHero));
                        }} />
                    </div>
                </Fragment>}
            
        </Fragment>
    )
}

export default Heroes;
