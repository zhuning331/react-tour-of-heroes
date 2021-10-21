import { Fragment, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../styles/SubTitle';
import { HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import HeroDetail from '../hero-detail/HeroDetail';
import { storeTypes } from '../../store/configureStore';
import { setHero, setHeroes } from '../../actions/heroAction';

const Heroes = () => {
    const selectedHero = useSelector((state: storeTypes) => state.heroReducer.hero);
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <SubTitle>My Heroes</SubTitle>
            <HeroList>
                {heroes.map(hero =>
                    <HeroItem key={hero.id} onClick={() => dispatch(setHero(hero))} selected={selectedHero && (hero.id === selectedHero.id)}>
                        <HeroBadge>{hero.id}</HeroBadge> {hero.name}
                    </HeroItem>)}
            </HeroList>
            {selectedHero && <HeroDetail hero={selectedHero} onHeroInputChange={(evt: ChangeEvent<HTMLInputElement>) => {
                dispatch(setHero({...selectedHero, name: evt.target.value}));
                dispatch(setHeroes({...selectedHero, name: evt.target.value}));
            }} />}
        </Fragment>
    )
}

export default Heroes;
