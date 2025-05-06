import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AbstractSection from './components/AbstractSection';
import IntroductionSection from './components/IntroductionSection';
import MethodologySection from './components/MethodologySection';
import PipelineSection from './components/PipelineSection';
import ResultsSection from './components/ResultsSection';
import DiscussionSection from './components/DiscussionSection';
import EvaluationSection from './components/EvaluationSection';
import AppendixSection from './components/AppendixSection';
// import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AbstractSection />
        <IntroductionSection />
        <MethodologySection />
        <PipelineSection />
        <ResultsSection />
        <DiscussionSection />
        <EvaluationSection />
        <AppendixSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
