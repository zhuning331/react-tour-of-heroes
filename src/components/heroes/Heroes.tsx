import { useState, Fragment } from 'react';
import SubTitle from '../../styles/SubTitle';
import HeroInput from '../../styles/HeroInput';
import Hero from '../../types/hero';

const Heroes = () => {
    const [hero, setHero] = useState<Hero>({
        id: 1,
        name: 'Windstorm'
    });

    return (
        <Fragment>
            <SubTitle>{hero.name.toUpperCase()} Details</SubTitle>
            <div><span>id: </span>{hero.id}</div>
            <div>
                <label htmlFor="name">Hero name: </label>
                <HeroInput id="name"  placeholder="name" value={hero.name} onChange={evt => setHero({...hero, name: evt.target.value})} />
            </div>
        </Fragment>
    )
}

export default Heroes;
