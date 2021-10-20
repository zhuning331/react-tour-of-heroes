import { useState } from 'react';
import SubTitle from '../../styles/SubTitle';

const Heroes = () => {
    const [hero] = useState('Windstorm');

    return (
        <SubTitle>{hero}</SubTitle>
    )
}

export default Heroes;
