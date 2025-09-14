import ContactForm from './ContactForm';

const CTASection = () => {
  return (
    <section id="formulario-contato" className="section-primary section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Conteúdo de Texto - Esquerda */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h2 className="text-white leading-tight">
                Pronto para Construir uma Presença Digital de 
                <span className="text-accent"> Autoridade e Tranquilidade</span>?
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Preencha o formulário ao lado para iniciarmos uma análise preliminar 
                do seu projeto. O primeiro passo é uma <strong className="text-white">conversa de 15 minutos, 
                sem compromisso</strong>, para entendermos como podemos ajudar.
              </p>
            </div>

            {/* Benefícios da consulta */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Na sua consulta gratuita, você receberá:
              </h3>
              
              <div className="space-y-3">
                {[
                  "Análise da sua presença digital atual",
                  "Identificação de riscos de conformidade",
                  "Estratégias personalizadas para seu nicho",
                  "Orçamento detalhado sem surpresas"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-accent-foreground text-sm">
                        check
                      </span>
                    </div>
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgência e credibilidade */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-accent text-xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Atendimento Prioritário
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Limitamos nosso atendimento para garantir a qualidade. 
                    Apenas <strong className="text-white">5 novos projetos por mês</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário - Direita */}
          <div className="animate-slide-in-right animate-delay-200">
            <ContactForm />
          </div>
        </div>

        {/* Elementos de confiança */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent text-xl">
                  security
                </span>
              </div>
              <h4 className="font-semibold text-white">100% Seguro</h4>
              <p className="text-sm text-white/80">Dados protegidos e criptografados</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent text-xl">
                  speed
                </span>
              </div>
              <h4 className="font-semibold text-white">Resposta Rápida</h4>
              <p className="text-sm text-white/80">Retorno em até 2 horas úteis</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-accent text-xl">
                  verified
                </span>
              </div>
              <h4 className="font-semibold text-white">Sem Compromisso</h4>
              <p className="text-sm text-white/80">Análise gratuita, sem obrigações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;