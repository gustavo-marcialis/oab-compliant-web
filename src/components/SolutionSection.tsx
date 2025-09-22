import solutionImage from '@/assets/solution-blueprint.jpg';

const SolutionSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem - Esquerda */}
          <div className="relative animate-slide-in-left">
            <div className="relative z-10">
              <img 
                src={solutionImage} 
                alt="Blueprint de um site de advocacia, demonstrando a engenharia e o planejamento do projeto" 
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
              />
            </div>
            {/* Elemento decorativo de fundo */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-tr from-accent/10 to-primary/10 rounded-2xl -z-10"></div>
          </div>

          {/* Conteúdo de Texto - Direita */}
          <div className="space-y-6 animate-slide-in-right animate-delay-200">
            <div className="space-y-2">
              <p className="text-primary font-semibold uppercase tracking-wider text-sm">
                A Solução Calcipher Tech
              </p>
              <h2 className="text-azul-marinho">
                Engenharia Digital para a Advocacia
              </h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Nós não criamos <strong className="text-foreground">"apenas sites"</strong>. 
                Nós projetamos e desenvolvemos plataformas digitais sob medida, onde cada elemento 
                é pensado com um duplo objetivo: <strong className="text-primary">fortalecer sua autoridade 
                profissional</strong> e <strong className="text-primary">garantir sua total tranquilidade </strong> 
                em relação às normas da OAB.
              </p>
              
              <p className="text-muted-foreground">
                Nossa metodologia une a <strong className="text-foreground">excelência técnica de um software </strong> 
                com a <strong className="text-foreground">compreensão profunda das necessidades e dos limites da advocacia</strong>.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-xl border border-border">
                <span className="material-symbols-outlined text-primary text-2xl">
                  verified
                </span>
                <p className="text-sm font-medium text-foreground">
                  <strong>Garantia de Conformidade:</strong> 100% alinhado com o Provimento 205/2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;