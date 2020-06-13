import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import ImpactSection from './ImpactSection/ImpactSection'
import TestimonialSection from './TestimonialSection/TestimonialSection'
import ThankYouSponsorsSection from './ThankYouSponsorsSection/ThankYouSponsorsSection'
import CorporateContactSection from './CorporateContactSection/CorporateContactSection'
import NewsFeatureSection from './NewsFeatureSection/NewsFeatureSection'

import KaelanPortrait from '../../images/photos/KaelanPortraitEdited2.jpg';
const KaelanBg = { backgroundImage: 'url(' + KaelanPortrait + ')'};


const Home = () => {
    return (<>
        <section className="has-bg-img" style={KaelanBg}><HeroSection /></section>
        <section className="plain-bg"><ImpactSection /></section>
        <section className="alternate-bg-2"><TestimonialSection/></section>
        <section className="plain-bg"><ThankYouSponsorsSection /></section>
        <section className="alternate-bg"><CorporateContactSection /></section>
        <section className="plain-bg"><NewsFeatureSection /></section>
    </>)
};

export default Home;