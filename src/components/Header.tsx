
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
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
            <Heart className="h-8 w-8 text-humanitarian-500" />
            <span className="ml-2 text-xl font-display font-semibold text-humanitarian-800">Âme Liñu Bokk</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              About Us
            </a>
            <a href="#mission" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              Our Mission
            </a>
            <a href="#programs" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              Programs
            </a>
            <a href="#donate" className="text-humanitarian-800 hover:text-humanitarian-500 transition-colors">
              Get Involved
            </a>
            <Button className="bg-humanitarian-500 hover:bg-humanitarian-600 text-white">
              Donate Now
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
              About Us
            </a>
            <a 
              href="#mission" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </a>
            <a 
              href="#programs" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#donate" 
              className="block py-2 text-humanitarian-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </a>
            <Button 
              className="w-full justify-center bg-humanitarian-500 hover:bg-humanitarian-600 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
