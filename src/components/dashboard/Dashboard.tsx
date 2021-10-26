import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubTitle from '../../styles/SubTitle';
import { storeTypes } from '../../store/configureStore';
import HeroMenu from '../../styles/HeroMenu';

const Dashboard = () => {
    const heroes = useSelector((state: storeTypes) => state.heroReducer.heroes.slice(1, 5));

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