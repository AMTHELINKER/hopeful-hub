
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section-spacing bg-humanitarian-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Rejoignez-nous pour faire la différence
          </h2>
          <p className="text-lg text-white/90 mb-4 leading-relaxed">
            "Bokk liñu am ak ñiko amul"
          </p>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Que ce soit par le bénévolat, les dons ou la sensibilisation, votre contribution compte. Ensemble, nous pouvons créer un monde plus équitable et compassionnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#donate" className="btn-primary bg-white text-humanitarian-700 hover:bg-warm-100">
              Faire un Don Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#" className="btn-outline border-white text-white hover:bg-white/10">
              Devenir Bénévole
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
