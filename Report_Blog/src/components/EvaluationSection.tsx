
import React from 'react';
import Section from './Section';

const EvaluationSection: React.FC = () => {
  return (
    <Section id="evaluation" title="Evaluation">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-4">
          We used a two-part protocol:
        </p>
        
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Count fidelity</strong> via a class-specific YOLO-World detector (MAE across 2,660 images: 28 classes × counts × 5 seeds).
          </li>
          <li className="mb-2">
            <strong>Semantic alignment</strong> via CLIP ViT-B/32 cosine similarity averaged over the same images.
          </li>
        </ul>
        
        <p className="mb-4">
          This isolates layout mechanism effects without runtime confounds.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Quantitative Results</h3>
        <p className="mb-4">
          Our evaluation showed that the recursive diffusion model demonstrated statistically significant improvements over baseline approaches. Particularly notable was the improvement in object count accuracy and the strong performance in semantic alignment scores, where our method maintained higher CLIP similarity scores across complex scenes with multiple objects.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Human Evaluation</h3>
        <p>
          We supplemented automatic metrics with human evaluation studies, where participants were asked to judge the fidelity of generated images to their corresponding text prompts. The recursive diffusion approach was consistently rated higher in terms of accurately representing the described scene, especially for prompts that specified precise spatial relationships or object counts.
        </p>
      </div>
    </Section>
  );
};

export default EvaluationSection;
