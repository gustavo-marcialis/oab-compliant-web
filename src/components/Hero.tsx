import heroImage from '@/assets/hero-security.jpg';

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario-contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-background section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo de Texto - Esquerda */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-azul-marinho leading-tight">
              A Tranquilidade de uma Presença Digital em{' '}
              <span className="gradient-text">Conformidade com a OAB</span>
            </h1>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium max-w-2xl">
              Desenvolvemos plataformas digitais para advogados e escritórios que transmitem 
              autoridade, constroem confiança e respeitam rigorosamente o Provimento 205/2021.{' '}
              <strong className="text-foreground"> Menos risco, mais credibilidade.</strong>
            </p>

            <div className="pt-4">
              <button 
                onClick={scrollToForm}
                className="btn-hero text-lg font-semibold"
              >
                Inicie a Análise do seu Projeto
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Imagem - Direita */}
          <div className="relative animate-slide-in-right animate-delay-200">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Ícone 3D de Cadeado Dourado sobre um pilar, simbolizando segurança e conformidade com a OAB para sites de advogados" 
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-hero)]"
              />
            </div>
            {/* Elemento decorativo de fundo */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;