
import React from 'react';
import Section from './Section';

const AbstractSection: React.FC = () => {
  return (
    <Section id="abstract" title="Abstract">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="mb-4">
          This project presents a unified pipeline for layout-controlled image synthesis that fuses large-language-model prompting, multi-stage detection–segmentation, and diffusion-based generation. A GPT-4o-mini module first performs semantic decomposition of a free-form textual prompt, extracting (i) a main object, (ii) auxiliary objects with estimated colors and quantities, and (iii) an independent background description. Preliminary visuals of each element are rendered with DALL·E 2, after which YOLO-v8 detection and Segment Anything (SAM) generate pixel-accurate masks for every object instance.
        </p>
        <p className="mb-4">
          The pipeline then invokes a second GPT-4o pass to predict object-wise bounding boxes on a fixed 256×256 grid and to refine global object counts. These boxes anchor a custom cross-attention alignment loss inside an adapted Stable Diffusion 1.5 UNet, encouraging token-level attention to concentrate within the prescribed spatial regions. Iterative guidance continues until the normalized layout loss falls below a preset threshold, after which standard LMS denoising completes the generation. The system automatically recycles GPU memory by unloading YOLO/SAM modules before diffusion, enabling end-to-end execution on a single GPU.
        </p>
        <p className="mb-4">
          Qualitative results show precise object placement and count fidelity across complex prompts involving numerosity ("three cats and two dogs next to two cars") and compositional layouts. The results reveal that recursive diffusion performs reliably in very small scenes (≤ 4 objects) and, although its error steadily rises as layouts become more crowded (beyond 8 objects), it still incurs noticeably less error than Single-Layout Diffusion throughout the tested range.
        </p>
        <p>
          Overall, the project demonstrates a practical route to controllable, high-fidelity image generation by marrying rapid LLM reasoning with classical vision backbones and diffusion models, highlighting the trade-offs between semantic accuracy, spatial precision, and computational overhead.
        </p>
      </div>
    </Section>
  );
};

export default AbstractSection;
