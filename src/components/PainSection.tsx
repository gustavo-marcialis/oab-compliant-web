const PainSection = () => {
  return (
    <section className="section-gray section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-azul-marinho mb-6">
            Sua Presença Digital Atual te Deixa Inseguro?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Coluna 1: Medo de Ferir a Ética */}
          <div className="feature-card group text-center animate-fade-in-up">
            <div className="relative inline-block mb-6">
              <span className="material-symbols-outlined material-icon-large text-primary" aria-label="Ícone de martelo de juiz">
                gavel
              </span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-destructive-foreground text-lg">
                  close
                </span>
              </div>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Medo de Ferir a Ética</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              A linha entre o marketing informativo e a captação indevida é tênue. 
              Um site inadequado pode gerar processos no Tribunal de Ética.
            </p>
          </div>

          {/* Coluna 2: Imagem Profissional Fraca */}
          <div className="feature-card group text-center animate-fade-in-up animate-delay-100">
            <div className="mb-6">
              <span className="material-symbols-outlined material-icon-large text-muted" aria-label="Ícone de rosto insatisfeito">
                sentiment_dissatisfied
              </span>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Imagem Profissional Fraca</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Templates genéricos e design amador comunicam descaso, afastando 
              clientes qualificados que buscam um especialista.
            </p>
          </div>

          {/* Coluna 3: Perda de Tempo e Oportunidades */}
          <div className="feature-card group text-center animate-fade-in-up animate-delay-200">
            <div className="mb-6">
              <span className="material-symbols-outlined material-icon-large text-muted" aria-label="Ícone de ampulheta">
                hourglass_empty
              </span>
            </div>
            
            <h3 className="text-azul-marinho mb-4">Perda de Tempo e Oportunidades</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Atrair contatos desqualificados pelo site consome seu tempo e energia, 
              que deveriam estar focados nos seus casos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;