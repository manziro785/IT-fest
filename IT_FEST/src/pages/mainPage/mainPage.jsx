import React from 'react';

import Partner from '../../components/partner/partner';
import Sponsors from '../../components/sponsors/sponsors';
import Corusel from '../../components/corusel/Corusel';
import Banner from '../../components/banner/Banner';
import CustomCarousel from '../../components/Scroller/scroller';

const MainPage = () => {
    return (
        <>
        <Banner/>
        <Corusel/> 
        <CustomCarousel/>
{/* <Sponsors/>
             <Partner/>
            */}
        </>
    );
};

export default MainPage;