import { Fragment, useEffect, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../styles/SubTitle';
import { HeroInput } from '../../styles/Hero';
import DetailLabel from '../../styles/DetailLabel';
import DetailButton from '../../styles/DetailButton';
import { storeTypes } from '../../store/configureStore';
import { setHero, getHero, updateHero } from '../../actions/heroAction';
import Hero from '../../types/hero';

const HeroDetail = (props: RouteComponentProps<{id: string}>) => {
    const dispatch = useDispatch();
    const hero = useSelector((state: storeTypes) => state.heroReducer.hero);

    useEffect(() => {
        dispatch(getHero(+props.match.params.id))
    }, [dispatch, props.match.params.id]);

    const handleSave = (hero: Hero) => {
        dispatch(updateHero(hero));
        props.history.goBack();
    }

    return (
        <Fragment>
            {hero &&
            <Fragment>
                <SubTitle>{hero.name.toUpperCase()} Details</SubTitle>
                <div><span>id: </span>{hero.id}</div>
                <div>
                    <DetailLabel htmlFor="name">Hero name: </DetailLabel>
                    <HeroInput id="name"  placeholder="name" value={hero.name} onChange={(evt: ChangeEvent<HTMLInputElement>) => 
                        dispatch(setHero({...hero, name: evt.target.value}))}/>
                </div>
                <DetailButton onClick={() => props.history.goBack()}>go back</DetailButton>
                <DetailButton onClick={() => handleSave(hero)}>save</DetailButton>
            </Fragment>}
        </Fragment>
    )
}

export default HeroDetail;