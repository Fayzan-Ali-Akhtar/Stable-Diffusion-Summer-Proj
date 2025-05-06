
import React from 'react';
import Section from './Section';
import methodologyImage from '../assets/methodology.png';

const MethodologySection: React.FC = () => {
  return (
    <Section id="methodology" title="Methodology">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-4">
            Our work presents a layout-controlled image–generation pipeline that transforms any free-form text prompt into an image in which we aim to display objects in exactly the requested number, colour, and position. The process begins with a lightweight GPT-4o model that interprets the prompt and emits a compact JSON "blueprint." This blueprint separates the scene into three parts: a main object with an explicit count and colour (e.g., "three red cats"), any additional objects, and an independent description of the background.
          </p>
          <p className="mb-4">
            Next, we obtain inexpensive visual placeholders. DALL·E 2 produces a 256×256 sketch of the background and one equally sized draft for each object mentioned in the plan. Although these drafts are rough, they provide enough detail for the vision stack to lock onto. YOLO-v8 detects every object in the drafts, and Segment Anything (SAM) carves out pixel-accurate masks. Whenever YOLO's class names diverge from the language in the prompt, GPT-4o selects the most semantically suitable match so that each detection maps back to the original object list without manual intervention.
          </p>
          <p>
            With coarse masks in hand, a second GPT-4o pass performs a quantity audit and predicts a bounding-box layout on the same 256×256 grid. This yields a high-level storyboard that specifies not only what must appear but also roughly where. Stable Diffusion 1.5 then synthesises the final image under two complementary guidance modes. In recursive diffusion the system re-runs the entire planning and detection loop whenever the generated image strays from the desired layout, gradually nudging counts and positions toward the blueprint. In single-layout diffusion (SLD) the GPT-derived layout is held fixed while a gentle attention-based steering term keeps the denoising process focused inside the prescribed boxes. Plain "vanilla" Stable Diffusion, used without any layout help, serves as a baseline.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src={methodologyImage} 
            alt="Recursive Diffusion Methodology" 
            className="max-w-full h-auto rounded-lg shadow-md" 
          />
        </div>
      </div>
    </Section>
  );
};

export default MethodologySection;
