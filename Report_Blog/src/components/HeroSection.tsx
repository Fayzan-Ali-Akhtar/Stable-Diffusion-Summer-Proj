
import React from 'react';
import heroImage from '../assets/hero.png';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Recursive Diffusion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90">
              A unified pipeline for layout-controlled image synthesis
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              This project presents a unified pipeline for layout-controlled image synthesis by marrying rapid LLM reasoning with classical vision backbones and diffusion models.
            </p>
            <button 
              onClick={() => document.getElementById('abstract')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
            >
              Learn More
            </button>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Recursive Diffusion Hero" 
              className="max-h-[600px] w-auto object-contain rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
