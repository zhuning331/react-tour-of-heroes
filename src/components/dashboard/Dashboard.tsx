import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SubTitle from '../../styles/SubTitle';
import { storeTypes } from '../../store/configureStore';
import HeroMenu from '../../styles/HeroMenu';
import { getHeroes } from '../../actions/heroAction';


const Dashboard = () => {
    const dispatch = useDispatch();
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes.slice(1, 5));

    useEffect(() => {
        dispatch(getHeroes());
    }, [dispatch]);

    return (
        <Fragment>
            <SubTitle>Top Heroes</SubTitle>
            <HeroMenu>
                {heroes.map(hero => <Link key={hero.id} to={`detail/${hero.id}`}>{hero.name}</Link>)}
            </HeroMenu>
        </Fragment>
    )
}

export default Dashboard;