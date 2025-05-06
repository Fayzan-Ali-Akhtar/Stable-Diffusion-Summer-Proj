import React from 'react';
import Section from './Section';
import example1 from '../assets/example1.png';
import example2 from '../assets/example2.png';
import example3 from '../assets/example3.png';
import example4 from '../assets/example4.png';
import example5 from '../assets/example5.png';

const AppendixSection: React.FC = () => {
  return (
    <Section id="appendix" title="Appendix: Qualitative Examples">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Below we present examples of images generated using our recursive diffusion pipeline (left) compared with Single-Layout Diffusion (right), showcasing its capability across diverse prompts and visual arrangements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col">
          <img 
            src={example1} 
            alt="Example 1: A black cow standing next to 2 red damaged cars" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
          />
          <p className="text-sm text-muted-foreground">
            <strong>Example 1:</strong> "A black cow standing next to 2 red damaged cars on a dirty lot."
          </p>
        </div>
        
        <div className="flex flex-col">
          <img 
            src={example2} 
            alt="Example 2: A delivery truck and a mailbox" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
          />
          <p className="text-sm text-muted-foreground">
            <strong>Example 2:</strong> "A delivery truck and a mailbox positioned side by side on a quiet suburban street."
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col">
          <img 
            src={example3} 
            alt="Example 3: Three cats and 2 dogs sitting next to 2 cars" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
          />
          <p className="text-sm text-muted-foreground">
            <strong>Example 3:</strong> "Three cats and 2 dogs sitting next to 2 cars."
          </p>
        </div>
        
        <div className="flex flex-col">
          <img 
            src={example4} 
            alt="Example 4: A woman reading a book under a large oak tree" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
          />
          <p className="text-sm text-muted-foreground">
            <strong>Example 4:</strong> "A woman reading a book under a large oak tree."
          </p>
        </div>
        
        <div className="flex flex-col">
          <img 
            src={example5} 
            alt="Example 5: A bird perched on a windowsill with a view of the city skyline" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
          />
          <p className="text-sm text-muted-foreground">
            <strong>Example 5:</strong> "A bird perched on a windowsill with a view of the city skyline."
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Recursive Diffusion Project | Senior Project Presentation
        </p>
      </div>
    </Section>
  );
};

export default AppendixSection;