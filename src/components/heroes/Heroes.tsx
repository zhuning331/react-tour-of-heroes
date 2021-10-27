import { Fragment, useEffect, ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SubTitle from '../../styles/SubTitle';
import { HeroList, HeroItem, HeroBadge, HeroDiv } from '../../styles/Hero';
import DeleteButton from '../../styles/DeleteButton';
import { storeTypes } from '../../store/configureStore';
import { getHeroes, deleteHero, addHero } from '../../actions/heroAction';

const Heroes = () => {
    const dispatch = useDispatch();
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes);
    const [heroName, setHeroName] = useState('');

    useEffect(() => {
        dispatch(getHeroes());
    }, [dispatch]);

    return (
        <Fragment>
            <SubTitle>My Heroes</SubTitle>
            <div>
                <label htmlFor="new-hero">Hero name: </label>
                <input id="new-hero" value={heroName} onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                    setHeroName(evt.target.value);
                }} />
                <button onClick={() => dispatch(addHero({id: 0, name: heroName}))}>
                    Add hero
                </button>
            </div>
            <HeroList>
                {heroes.map(hero =>
                    <HeroDiv key={hero.id}>
                        <Link to={`detail/${hero.id}`}>
                            <HeroItem key={hero.id}>
                                <HeroBadge>{hero.id}</HeroBadge> {hero.name}
                            </HeroItem>
                        </Link>
                        <DeleteButton onClick={() => dispatch(deleteHero(hero.id))}>x</DeleteButton>
                    </HeroDiv>
                )}
            </HeroList>
        </Fragment>
    )
}

export default Heroes;
