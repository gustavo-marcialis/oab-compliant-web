import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import SolutionSection from '@/components/SolutionSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import TestimonialSection from '@/components/TestimonialSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainSection />
      <SolutionSection />
      <DifferentialsSection />
      <TestimonialSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
