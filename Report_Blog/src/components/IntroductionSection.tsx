import React from 'react';
import Section from './Section';

const IntroductionSection: React.FC = () => {
  return (
    <Section id="introduction" title="Introduction">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-4">
          Deep generative models have transformed computer vision, enabling the synthesis of highly realistic images from free-form text. Diffusion models such as Stable Diffusion and DALL·E routinely achieve impressive photorealism, yet they struggle when prompts demand precise spatial arrangements: object counts drift, layouts collapse, and post-hoc editing becomes the norm. Tackling this controllability gap is essential for practical deployments in advertising, game design, and data simulation, where strict adherence to scene structure is non-negotiable.
        </p>
        <p className="mb-4">
          In this work we introduce a unified pipeline for layout-controlled image generation. The system couples the reasoning power of Large Language Models (LLMs) with classical vision backbones and diffusion synthesis. A GPT-4o mini module first decomposes any prompt into (i) a main object, (ii) auxiliary objects with inferred colors and quantities, and (iii) an independent background description. These elements are rendered into draft images by DALL·E, then refined by YOLO-v8 detection and Segment Anything (SAM) to obtain pixel-accurate masks. 
        </p>
        <p>
          To translate this semantic plan into a final picture, we embed a novel cross-attention alignment loss inside a custom Stable Diffusion UNet. Bounding boxes predicted by GPT anchor token attention, steering the denoising trajectory toward the desired layout while an entropy term discourages object overlap. The resulting Recursive Diffusion strategy—augmented by GPT-based quantity reasoning—maintains tight object-count fidelity across a wide spectrum of scene complexities. We benchmark the pipeline on a purpose-built dataset of 18 object classes (1–20 instances each, 5 seeds per count, 1,800 total). By fusing language understanding, detection–segmentation, and diffusion in a single loop, this study offers a practical roadmap toward robust, layout-aware image synthesis—bridging the gap between creative intent and faithful visual execution.
        </p>
      </div>
    </Section>
  );
};

export default IntroductionSection;