import React from 'react';
import Section from './Section';
import figure1 from '../assets/figure1.png';
import figure2 from '../assets/figure2.png';

const ResultsSection: React.FC = () => {
  return (
    <Section id="results" title="Results">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Our experiments demonstrate that the recursive diffusion approach consistently outperforms baseline methods across a wide range of prompt types and complexity levels. The following figures illustrate key comparative results between our method and leading alternatives.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img 
            src={figure1} 
            alt="Figure 1: Count error for SLD vs Recursive" 
            className="max-w-full h-auto rounded-lg shadow-md mb-4" 
          />
          <p className="text-center text-sm text-muted-foreground">
            <strong>Figure 1:</strong> Absolute count error for SLD (blue) vs. Recursive (red) from 2 to 19 objects: both methods are reliable when ≤ 3 instances (MAE &lt; 1), but SLD's error jumps at medium densities while recursive diffusion climbs more gradually.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={figure2} 
            alt="Figure 2: CLIP cosine similarity results" 
            className="max-w-full h-auto rounded-lg shadow-md mb-4" 
          />
          <p className="text-center text-sm text-muted-foreground">
            <strong>Figure 2:</strong> CLIP cosine similarity vs. requested object count: SLD leads at low densities (≤ 4 objects, sim ≈ 0.34) but degrades faster than recursive diffusion, which holds a slight lead beyond 7 objects.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ResultsSection;