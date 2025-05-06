
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  backgroundClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = '', 
  backgroundClassName = ''
}) => {
  return (
    <section id={id} className={`section-padding scroll-mt-24 ${backgroundClassName}`}>
      <div className={`container-width ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
