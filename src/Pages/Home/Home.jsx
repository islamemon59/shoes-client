import React from 'react';
import AuthHook from '../../Hooks/AuthHook';

const Home = () => {

    const {name} = AuthHook()

    console.log(name);

    return (
        <div>
            This is home
        </div>
    );
};

export default Home;