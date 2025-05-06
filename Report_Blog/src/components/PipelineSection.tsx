
import React from 'react';
import Section from './Section';
import pipelineImage from '../assets/pipeline.png';

const PipelineSection: React.FC = () => {
  return (
    <Section id="pipeline" title="Pipeline">
      <div className="flex flex-col gap-6">
        <div className="flex justify-center mb-6">
          <img 
            src={pipelineImage} 
            alt="Recursive Diffusion Pipeline Diagram" 
            className="max-w-full h-auto rounded-lg shadow-md" 
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-4">
            The complete recursive diffusion pipeline consists of four major components working in concert:
          </p>
          
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-3">
              <strong>Text Encoding Module:</strong> Processes the input prompt using a transformer-based text encoder, extracting both high-level concepts and detailed descriptors that guide the generation process.
            </li>
            <li className="mb-3">
              <strong>Initial Generation Stage:</strong> Employs a state-of-the-art latent diffusion model to produce a first-pass image based on the encoded text features.
            </li>
            <li className="mb-3">
              <strong>Alignment Evaluation:</strong> Analyzes the generated image against the original text prompt using a specialized CLIP-based metric that quantifies both global semantic alignment and detailed feature correspondence.
            </li>
            <li className="mb-3">
              <strong>Recursive Refinement:</strong> Based on the alignment evaluation, adjusts attention weights and conditioning parameters for subsequent generation iterations, focusing computational resources on aspects of the prompt that require improved representation.
            </li>
          </ol>
          
          <p>
            This iterative process continues until either a predefined alignment threshold is reached or a maximum number of iterations is completed. The final output represents the culmination of this recursive refinement process, typically demonstrating superior prompt adherence compared to single-pass generation approaches.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PipelineSection;
