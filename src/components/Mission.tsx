
import React from 'react';
import { Heart, Globe, Home } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="section-spacing bg-humanitarian-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-humanitarian-600 bg-humanitarian-100 rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-humanitarian-900 mb-6">
            Dedicated to a world of dignity, equality, and opportunity for all
          </h2>
          <p className="text-lg text-humanitarian-700 leading-relaxed">
            We believe in the power of compassion to transform lives. Through sustainable initiatives, we address immediate needs while building long-term resilience in communities facing adversity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Our Vision</h3>
            <p className="text-humanitarian-700">
              A world where every person has access to resources and opportunities needed for a dignified life, regardless of where they were born.
            </p>
          </div>
          
          {/* Approach Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Our Approach</h3>
            <p className="text-humanitarian-700">
              We combine immediate assistance with sustainable solutions, working alongside local communities to create lasting, meaningful change.
            </p>
          </div>
          
          {/* Values Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="300">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Home className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Our Values</h3>
            <p className="text-humanitarian-700">
              Compassion, integrity, and accountability guide everything we do. We respect local cultures and believe in the potential of every individual.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#programs" className="btn-outline">
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;
