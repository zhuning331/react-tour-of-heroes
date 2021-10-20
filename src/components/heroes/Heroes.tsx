import { useState, Fragment } from 'react';
import SubTitle from '../../styles/SubTitle';
import Hero from '../../types/hero';

const Heroes = () => {
    const [hero] = useState<Hero>({
        id: 1,
        name: 'Windstorm'
    });

    return (
        <Fragment>
            <SubTitle>{hero.name.toUpperCase()} Details</SubTitle>
            <div><span>id: </span>{hero.id}</div>
            <div><span>name: </span>{hero.name}</div>
        </Fragment>
    )
}

export default Heroes;
