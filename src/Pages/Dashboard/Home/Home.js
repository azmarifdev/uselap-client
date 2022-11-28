import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner';

import Category from './Category/Category';
import BestSells from './Feature/BestSells';
// import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Advertise/>
            <Category />
            <BestSells/>
            {/* <Feature /> */}
        </div>
    );
};

export default Home;