import { useState, Fragment } from 'react';
import SubTitle from '../../styles/SubTitle';
import { HeroInput, HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import Hero from '../../types/hero';
import HEROES from '../../mock-heroes';

const Heroes = () => {
    const [hero, setHero] = useState<Hero>({
        id: 1,
        name: 'Windstorm'
    });
    const [heroes] = useState<Hero[]>(HEROES);

    return (
        <Fragment>
            <SubTitle>{hero.name.toUpperCase()} Details</SubTitle>
            <HeroList>
                {heroes.map(hero =>
                    <HeroItem>
                        <HeroBadge>{hero.id}</HeroBadge> {hero.name}
                    </HeroItem>)
                }
            </HeroList>
            <div><span>id: </span>{hero.id}</div>
            <div>
                <label htmlFor="name">Hero name: </label>
                <HeroInput id="name"  placeholder="name" value={hero.name} onChange={evt => setHero({...hero, name: evt.target.value})} />
            </div>
        </Fragment>
    )
}

export default Heroes;
