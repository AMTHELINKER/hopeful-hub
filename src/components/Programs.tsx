
import React from 'react';
import { Droplet, Book, Apple, Heart, MoveRight } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-warm-600 bg-warm-100 rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-humanitarian-900 mb-6">
            Creating sustainable solutions for lasting change
          </h2>
          <p className="text-lg text-humanitarian-700 leading-relaxed">
            Our comprehensive approach focuses on addressing immediate needs while building long-term resilience through these key program areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clean Water Program */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1594732808997-a351a1510f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2">
                    <Droplet className="h-5 w-5 text-humanitarian-600" />
                  </div>
                  <span className="text-white font-medium">Clean Water</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-3">Clean Water & Sanitation</h3>
              <p className="text-humanitarian-700 mb-4">
                We provide sustainable access to clean water, promote proper sanitation practices, and educate communities on maintaining water resources.
              </p>
              <a href="#" className="inline-flex items-center text-humanitarian-600 font-medium hover:text-humanitarian-700 transition-colors">
                Learn more <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Education Program */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2">
                    <Book className="h-5 w-5 text-humanitarian-600" />
                  </div>
                  <span className="text-white font-medium">Education</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-3">Education & Skills</h3>
              <p className="text-humanitarian-700 mb-4">
                We build schools, train teachers, and provide educational resources to ensure children and adults have access to quality learning opportunities.
              </p>
              <a href="#" className="inline-flex items-center text-humanitarian-600 font-medium hover:text-humanitarian-700 transition-colors">
                Learn more <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Nutrition Program */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2">
                    <Apple className="h-5 w-5 text-humanitarian-600" />
                  </div>
                  <span className="text-white font-medium">Nutrition</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-3">Food Security & Nutrition</h3>
              <p className="text-humanitarian-700 mb-4">
                We combat hunger through sustainable agriculture initiatives, emergency food assistance, and nutrition education programs.
              </p>
              <a href="#" className="inline-flex items-center text-humanitarian-600 font-medium hover:text-humanitarian-700 transition-colors">
                Learn more <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Healthcare Program */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover">
            <div className="h-56 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2">
                    <Heart className="h-5 w-5 text-humanitarian-600" />
                  </div>
                  <span className="text-white font-medium">Healthcare</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold text-humanitarian-800 mb-3">Healthcare Access</h3>
              <p className="text-humanitarian-700 mb-4">
                We improve access to essential healthcare services through mobile clinics, community health worker training, and medical infrastructure development.
              </p>
              <a href="#" className="inline-flex items-center text-humanitarian-600 font-medium hover:text-humanitarian-700 transition-colors">
                Learn more <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-outline">
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
