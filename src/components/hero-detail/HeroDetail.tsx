import { Fragment, useEffect, ChangeEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SubTitle from '../../styles/SubTitle';
import { HeroInput } from '../../styles/Hero';
import DetailLabel from '../../styles/DetailLabel';
import BackButton from '../../styles/BackButton';
import { storeTypes } from '../../store/configureStore';
import { addMessage } from '../../actions/messageAction';
import { setHeroes } from '../../actions/heroAction';

const HeroDetail = (props: RouteComponentProps<{id: string}>) => {
    const dispatch = useDispatch();
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes);
    const hero = heroes.find(hero => hero.id === +props.match.params.id);

    useEffect(() => {
        dispatch(addMessage(`Hero Detail: fetched hero id=${props.match.params.id}`));
    }, [dispatch, props.match.params.id]);

    return (
        <Fragment>
            {hero &&
            <Fragment>
                <SubTitle>{hero.name.toUpperCase()} Details</SubTitle>
                <div><span>id: </span>{hero.id}</div>
                <div>
                    <DetailLabel htmlFor="name">Hero name: </DetailLabel>
                    <HeroInput id="name"  placeholder="name" value={hero.name} onChange={(evt: ChangeEvent<HTMLInputElement>) => 
                        dispatch(setHeroes({...hero, name: evt.target.value}))}/>
                </div>
                <BackButton onClick={() => props.history.goBack()}>go back</BackButton>
            </Fragment>}
        </Fragment>
    )
}

export default HeroDetail;