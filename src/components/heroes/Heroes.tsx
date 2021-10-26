import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SubTitle from '../../styles/SubTitle';
import { HeroList, HeroItem, HeroBadge } from '../../styles/Hero';
import { storeTypes } from '../../store/configureStore';
import { addMessage } from '../../actions/messageAction';

const Heroes = () => {
    const dispatch = useDispatch();
    const selectedHero = useSelector((state: storeTypes) => state.heroReducer.hero);
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes);

    useEffect(() => {
        dispatch(addMessage('Heroes: fetched heroes'));
    }, [dispatch]);

    return (
        <Fragment>
            <SubTitle>My Heroes</SubTitle>
            <HeroList>
                {heroes.map(hero =>
                    <Link key={hero.id} to={`detail/${hero.id}`}>
                        <HeroItem key={hero.id} selected={selectedHero && (hero.id === selectedHero.id)}>
                            <HeroBadge>{hero.id}</HeroBadge> {hero.name}
                        </HeroItem>
                    </Link>
                )}
            </HeroList>
        </Fragment>
    )
}

export default Heroes;
