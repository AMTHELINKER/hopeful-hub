
import React from 'react';
import { Heart, Globe, Home } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="section-spacing bg-humanitarian-50">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-humanitarian-600 bg-humanitarian-100 rounded-full mb-4">
            Notre Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-humanitarian-900 mb-6">
            Dédiés à un monde de dignité, d'égalité et d'opportunité pour tous
          </h2>
          <p className="text-lg text-humanitarian-700 leading-relaxed">
            Nous croyons au pouvoir de la compassion pour transformer des vies. Grâce à des initiatives durables, nous répondons aux besoins immédiats tout en renforçant la résilience à long terme dans les communautés confrontées à l'adversité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Heart className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Notre Vision</h3>
            <p className="text-humanitarian-700">
              Un monde où chaque personne a accès aux ressources et aux opportunités nécessaires pour une vie digne, indépendamment de son lieu de naissance.
            </p>
          </div>
          
          {/* Approach Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="200">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Notre Approche</h3>
            <p className="text-humanitarian-700">
              Nous combinons assistance immédiate et solutions durables, travaillant aux côtés des communautés locales pour créer un changement durable et significatif.
            </p>
          </div>
          
          {/* Values Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm card-hover" data-aos="fade-up" data-aos-delay="300">
            <div className="rounded-full bg-humanitarian-100 p-3 inline-flex w-14 h-14 items-center justify-center mb-6">
              <Home className="h-7 w-7 text-humanitarian-600" />
            </div>
            <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-4">Nos Valeurs</h3>
            <p className="text-humanitarian-700">
              La compassion, l'intégrité et la responsabilité guident tout ce que nous faisons. Nous respectons les cultures locales et croyons au potentiel de chaque individu.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#programs" className="btn-outline">
            Voir Notre Impact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;
