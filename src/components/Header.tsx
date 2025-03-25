
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/62de0f65-a16e-43ad-a14e-dfb830bf94bf.png" 
              alt="Âme Liñu Bokk Logo" 
              className="h-12"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              À Propos
            </a>
            <a href="#mission" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              Notre Mission
            </a>
            <a href="#programs" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              Programmes
            </a>
            <a href="#donate" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              S'Impliquer
            </a>
            <Button className="bg-humanitarian-500 hover:bg-humanitarian-600 text-white">
              Faire un Don
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-humanitarian-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="py-4 px-4 space-y-4">
            <a 
              href="#about" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </a>
            <a 
              href="#mission" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Notre Mission
            </a>
            <a 
              href="#programs" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Programmes
            </a>
            <a 
              href="#donate" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              S'Impliquer
            </a>
            <Button 
              className="w-full justify-center bg-humanitarian-500 hover:bg-humanitarian-600 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Faire un Don
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
