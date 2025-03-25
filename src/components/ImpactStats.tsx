
import React from 'react';
import AnimatedCounter from './ui/AnimatedCounter';

const ImpactStats = () => {
  return (
    <section className="section-spacing bg-humanitarian-600">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Behind every number is a life changed, a community strengthened, and a future made brighter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lives Impacted */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <AnimatedCounter end={120000} />
            <p className="mt-3 text-white font-medium">Lives Impacted</p>
          </div>
          
          {/* Communities Served */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <AnimatedCounter end={75} suffix="+" />
            <p className="mt-3 text-white font-medium">Communities Served</p>
          </div>
          
          {/* Projects Completed */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <AnimatedCounter end={450} suffix="+" />
            <p className="mt-3 text-white font-medium">Projects Completed</p>
          </div>
          
          {/* Volunteers Worldwide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
            <AnimatedCounter end={5200} />
            <p className="mt-3 text-white font-medium">Volunteers Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
