import testimonialBg from '@/assets/testimonial-bg.jpg';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="bg-background section-padding relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-azul-marinho mb-6">
            O que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-hero)] border border-border/50 animate-fade-in-up">
            {/* Aspas decorativas */}
            <div className="text-6xl text-primary/20 font-serif leading-none mb-6">"</div>
            
            {/* Depoimento */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground font-medium mb-8 italic">
              A equipe da Calcipher Tech não apenas entregou um site de altíssimo nível, 
              mas demonstrou um profundo conhecimento das nossas restrições éticas. 
              <strong className="text-primary not-italic">Pela primeira vez, me sinto totalmente 
              seguro com a minha presença online.</strong>
            </blockquote>

            {/* Assinatura */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  Sócio de Escritório de Advocacia Empresarial
                </p>
                <p className="text-sm text-muted-foreground">
                  São Paulo - SP
                </p>
              </div>
            </div>

            {/* Estrelas decorativas */}
            <div className="flex justify-center mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-accent text-xl" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Métricas de confiança */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="animate-fade-in-up animate-delay-100">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Conformidade OAB</p>
          </div>
          <div className="animate-fade-in-up animate-delay-200">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <p className="text-sm text-muted-foreground">Projetos Entregues</p>
          </div>
          <div className="animate-fade-in-up animate-delay-300">
            <div className="text-3xl font-bold text-primary mb-2">15 min</div>
            <p className="text-sm text-muted-foreground">Primeira Consultoria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;