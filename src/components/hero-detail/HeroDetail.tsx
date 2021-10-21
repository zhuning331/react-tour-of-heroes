import { Fragment, ChangeEvent } from 'react';
import SubTitle from '../../styles/SubTitle';
import { HeroInput } from '../../styles/Hero';
import Hero from '../../types/hero';

interface IHeroDetail {
    hero: Hero;
    onHeroInputChange(evt: ChangeEvent<HTMLInputElement>): void; 
}

const HeroDetail = (props: IHeroDetail) => {
    return (
        <Fragment>
            <SubTitle>{props.hero.name.toUpperCase()} Details</SubTitle>
            <div><span>id: </span>{props.hero.id}</div>
            <div>
                <label htmlFor="name">Hero name: </label>
                <HeroInput id="name"  placeholder="name" value={props.hero.name} onChange={props.onHeroInputChange} />
            </div>
        </Fragment>
    )
}

export default HeroDetail;