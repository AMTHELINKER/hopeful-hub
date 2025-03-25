
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-humanitarian-900/70 to-humanitarian-800/50"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in [animation-delay:200ms]">
          <span className="inline-block rounded-full bg-humanitarian-500/20 px-4 py-1.5 text-xs font-medium text-white mb-6">
            Making a difference together
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-shadow-lg">
            Creating lasting change in communities worldwide
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            We empower communities through sustainable development, education, and healthcare initiatives, creating pathways to self-reliance and dignity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#donate" className="btn-primary">
              Support Our Cause
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#mission" className="btn-outline border-white text-white hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
