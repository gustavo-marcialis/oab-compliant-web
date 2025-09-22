import Header from '@/components/Header';
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
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="dor">
        <PainSection />
      </section>
      <section id="solucao">
        <SolutionSection />
      </section>
      <section id="diferenciais">
        <DifferentialsSection />
      </section>
      <section id="processo">
        <ProcessSection />
      </section>
      <section id="contato">
        <CTASection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
