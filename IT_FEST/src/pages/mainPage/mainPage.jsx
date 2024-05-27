import React from 'react';
import Sponsors from '../../components/sponsors/sponsors';
import Section from "../../components/section/Section.jsx";
import Speakers from "../../components/speakers/speakers.jsx";

const MainPage = () => {
    return (
        <>
            <Speakers/>
            <Sponsors/>
            <Section/>

        </>
    );
};

export default MainPage;