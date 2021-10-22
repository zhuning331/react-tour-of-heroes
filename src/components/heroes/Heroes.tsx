import { Fragment, ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../styles/SubTitle';
import { HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import HeroDetail from '../hero-detail/HeroDetail';
import { storeTypes } from '../../store/configureStore';
import { setHero, setHeroes } from '../../actions/heroAction';
import { addMessage } from '../../actions/messageAction';
import Hero from '../../types/hero';

const Heroes = () => {
    const dispatch = useDispatch();
    const selectedHero = useSelector((state: storeTypes) => state.heroReducer.hero);
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes);

    useEffect(() => {
        dispatch(addMessage('Hero Reducer: fetched heroes'));
    }, [dispatch]);

    const handleHeroClick = (hero: Hero) => {
        dispatch(setHero(hero));
        dispatch(addMessage(`Heroes Component: Selected hero id=${hero.id}`));
    };

    return (
        <Fragment>
            <SubTitle>My Heroes</SubTitle>
            <HeroList>
                {heroes.map(hero =>
                    <HeroItem key={hero.id} onClick={() => handleHeroClick(hero)} selected={selectedHero && (hero.id === selectedHero.id)}>
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
