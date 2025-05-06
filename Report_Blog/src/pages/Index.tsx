import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AbstractSection from '../components/AbstractSection';
import IntroductionSection from '../components/IntroductionSection';
import MethodologySection from '../components/MethodologySection';
import PipelineSection from '../components/PipelineSection';
import ResultsSection from '../components/ResultsSection';
import DiscussionSection from '../components/DiscussionSection';
import EvaluationSection from '../components/EvaluationSection';
import AppendixSection from '../components/AppendixSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <div className="bg-secondary/30">
          <AbstractSection />
        </div>
        <IntroductionSection />
        <div className="bg-secondary/30">
          <MethodologySection />
        </div>
        <PipelineSection />
        <div className="bg-secondary/30">
          <ResultsSection />
        </div>
        <DiscussionSection />
        <div className="bg-secondary/30">
          <EvaluationSection />
        </div>
        <AppendixSection />
      </div>
    </div>
  );
};

export default Index;