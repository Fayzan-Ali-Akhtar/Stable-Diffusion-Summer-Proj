
import React from 'react';
import Section from './Section';

const DiscussionSection: React.FC = () => {
  return (
    <Section id="discussion" title="Discussion">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-8">
          Across all strategies we kept text-encoder weights, guidance scale, and denoising schedule fixed. Vanilla Stable Diffusion is fastest but struggles with layout control. Recursive Diffusion adds light GPT↔vision loops for precise counts and positions but incurs extra runtime and occasional mask instability. SLD uses a single GPT-derived layout with an attention steering loss, balancing overhead and reliability. 
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Improved Attribute Binding</h3>
        <p className="mb-4">
          The recursive feedback loop helps resolve ambiguities in attribute assignment, ensuring that descriptors in the prompt are correctly associated with their intended objects. This addresses a common failure mode in existing systems where attributes may be incorrectly swapped between different elements in the scene.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Enhanced Spatial Reasoning</h3>
        <p className="mb-4">
          By evaluating spatial relationships across iterations, our model demonstrates superior ability to represent positional descriptions accurately. This is particularly evident in prompts that specify complex arrangements of multiple objects.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Conceptual Fidelity</h3>
        <p className="mb-4">
          Abstract concepts and themes that might be overlooked in a single-pass approach are progressively reinforced through the recursive mechanism, resulting in images that better capture the intended conceptual elements of the prompt.
        </p>
      </div>
    </Section>
  );
};

export default DiscussionSection;
