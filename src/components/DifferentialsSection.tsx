const DifferentialsSection = () => {
  return (
    <section className="section-gray section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-azul-marinho mb-6">
            A Parceria Certa para o seu Crescimento Ético
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Coluna 1: Conformidade por Design */}
          <div className="feature-card text-center animate-flip-in group-hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  lock
                </span>
              </div>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Conformidade por Design</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              A ética da OAB é o alicerce do nosso desenvolvimento, não um item a ser 
              verificado no final. <strong className="text-foreground">Garantimos em contrato.</strong>
            </p>
          </div>

          {/* Coluna 2: Foco em UX */}
          <div className="feature-card text-center animate-flip-in animate-delay-100 group-hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-3xl">
                  interests
                </span>
              </div>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Foco em UX</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Criamos uma experiência de usuário intuitiva que transmite confiança e 
              profissionalismo, <strong className="text-foreground">facilitando a jornada do seu cliente.</strong>
            </p>
          </div>

          {/* Coluna 3: Tecnologia Sob Medida */}
          <div className="feature-card text-center animate-flip-in animate-delay-200 group-hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-secondary/80 rounded-2xl flex items-center justify-center border border-border">
                <span className="material-symbols-outlined text-primary text-3xl">
                  code
                </span>
              </div>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Tecnologia Sob Medida</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Não usamos templates prontos. Nosso <strong className="text-foreground">código limpo</strong> garante 
              um site mais rápido, seguro e perfeitamente adaptado ao seu escritório.
            </p>
          </div>
        </div>

        {/* Call-to-action secundário */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-background px-6 py-3 rounded-xl border border-border shadow-sm">
            <span className="material-symbols-outlined text-primary">
              schedule
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Projetos entregues em até 30 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;