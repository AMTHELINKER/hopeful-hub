
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-humanitarian-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/62de0f65-a16e-43ad-a14e-dfb830bf94bf.png" 
                alt="Âme Liñu Bokk Logo" 
                className="h-14"
              />
            </div>
            <p className="text-warm-400 mb-6">
              Donner aux communautés les moyens d'agir par le développement durable, l'éducation et des initiatives de soins de santé.
            </p>
            <p className="text-warm-400 mb-6 italic">
              "bokk liñu am ak ñëkó amul."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-humanitarian-800 hover:bg-humanitarian-700 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-warm-400 hover:text-white transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#mission" className="text-warm-400 hover:text-white transition-colors">Notre Mission</a>
              </li>
              <li>
                <a href="#programs" className="text-warm-400 hover:text-white transition-colors">Programmes</a>
              </li>
              <li>
                <a href="#" className="text-warm-400 hover:text-white transition-colors">Témoignages</a>
              </li>
              <li>
                <a href="#" className="text-warm-400 hover:text-white transition-colors">Actualités</a>
              </li>
              <li>
                <a href="#donate" className="text-warm-400 hover:text-white transition-colors">Faire un Don</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Contactez-Nous</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <span className="text-warm-400">
                  123 Rue de la Compassion<br />
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <a href="tel:+221123456789" className="text-warm-400 hover:text-white transition-colors">
                  +221 12 345 67 89
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-humanitarian-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@amelinubokk.org" className="text-warm-400 hover:text-white transition-colors">
                  info@amelinubokk.org
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6">Restez Informé</h3>
            <p className="text-warm-400 mb-4">
              Abonnez-vous à notre newsletter pour suivre notre travail et notre impact.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="rounded-l-lg px-4 py-2 w-full focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-humanitarian-500 hover:bg-humanitarian-600 rounded-r-lg px-4 py-2 transition-colors"
                >
                  S'abonner
                </button>
              </div>
            </form>
            <p className="text-warm-400 text-sm">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
        
        <div className="border-t border-humanitarian-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-warm-400 text-sm mb-4 md:mb-0">
              © {currentYear} Âme Liñu Bokk. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Conditions d'Utilisation
              </a>
              <a href="#" className="text-warm-400 hover:text-white text-sm transition-colors">
                Politique des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
