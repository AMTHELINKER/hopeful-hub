
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import ImpactStats from '../components/ImpactStats';
import Programs from '../components/Programs';
import CallToAction from '../components/CallToAction';
import DonateForm from '../components/DonateForm';
import Footer from '../components/Footer';

const Index = () => {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('section > div');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <ImpactStats />
      <Programs />
      <CallToAction />
      <DonateForm />
      <Footer />
    </div>
  );
};

export default Index;
