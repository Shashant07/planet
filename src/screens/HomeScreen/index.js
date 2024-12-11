import React from 'react';
import HeroSection from '../../components/Main/HeroSection';
import AboutSection from '../../components/Main/AboutSection';
import ValuesSection from '../../components/Main/ValuesSection';
import StatsSection from '../../components/Main/StatsSection';
import FeaturesSection from '../../components/Main/FeaturesSection';
import AltFeaturesSection from '../../components/Main/AltFeaturesSection';
// import ServicesSection from '../../components/Main/ServicesSection';
import PricingSection from '../../components/Main/PricingSection';
import FaqSection from '../../components/Main/FaqSection';
// import PortfolioSection from '../../components/Main/PortfolioSection';
import TestimonialsSection from '../../components/Main/TestimonialsSection';
import TeamSection from '../../components/Main/TeamSection';
import ClientsSection from '../../components/Main/ClientsSection';
import RecentPostsSection from '../../components/Main/RecentPostsSection';
import ContactSection from '../../components/Main/ContactSection';
// import AboutSection from

const HomeScreen = () => {
  return (
    <main className="main">
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <StatsSection />
        <FeaturesSection />
        <AltFeaturesSection />
        {/* <ServicesSection /> */}
        <PricingSection />
        <FaqSection />
        {/* <PortfolioSection /> */}
        <TestimonialsSection />
        <TeamSection />
        <ClientsSection />
        <RecentPostsSection />
        <ContactSection />
    </main>
  )
}

export default HomeScreen;