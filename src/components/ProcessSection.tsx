const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico e Briefing",
      description: "Iniciamos com uma imersão profunda para entender seu escritório, seus clientes e seus objetivos.",
      icon: "search"
    },
    {
      number: "02", 
      title: "Design e Estratégia",
      description: "Criamos um design de UX sob medida e um plano de ação, que são aprovados por você.",
      icon: "design_services"
    },
    {
      number: "03",
      title: "Desenvolvimento e Conformidade", 
      description: "Nossa equipe técnica constrói sua plataforma digital, com a ética da OAB como prioridade.",
      icon: "code"
    },
    {
      number: "04",
      title: "Lançamento e Treinamento",
      description: "Lançamos seu novo site e garantimos que você saiba como utilizá-lo para construir sua autoridade.",
      icon: "rocket_launch"
    }
  ];

  return (
    <section className="section-gray section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-azul-marinho mb-6">
            Nossa Jornada, do Diagnóstico ao Lançamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um processo transparente e estruturado, pensado para maximizar seus resultados 
            e garantir sua total tranquilidade durante todo o desenvolvimento.
          </p>
        </div>

        {/* Timeline horizontal em desktop, vertical em mobile */}
        <div className="relative">
          {/* Linha conectora - visível apenas em desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Card do processo */}
                <div className="bg-background rounded-2xl p-6 shadow-[var(--shadow-card)] border border-border/50 hover:shadow-[var(--shadow-hero)] transition-[var(--transition-smooth)] group relative z-10">
                  {/* Número do passo */}
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-primary-foreground font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-2xl text-muted">
                      {step.icon}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-azul-marinho mb-3 text-lg">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Indicador de progresso visual */}
                  <div className="mt-4 w-full bg-border h-1 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{width: `${(index + 1) * 25}%`}}
                    ></div>
                  </div>
                </div>

                {/* Conector entre cards - visível apenas em desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 right-0 transform translate-x-1/2 z-20">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action da seção */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-background px-8 py-4 rounded-2xl border border-border shadow-sm">
            <span className="material-symbols-outlined text-primary">
              access_time
            </span>
            <div className="text-left">
              <p className="font-semibold text-foreground">Prazo de Entrega</p>
              <p className="text-sm text-muted-foreground">Entre 15 a 30 dias úteis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;