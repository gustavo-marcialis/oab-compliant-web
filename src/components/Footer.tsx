import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-cinza-escuro text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Logo Compliance Digital OAB - Desenvolvimento de sites para advogados em conformidade com o Provimento 205/2021"
                className="h-8 w-auto"
              />
            </div>
            
            <p className="text-white/80 leading-relaxed max-w-md">
              Especialistas em desenvolvimento de sites para advogados. 
              Tecnologia sob medida com total conformidade à OAB.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  email
                </span>
                <a 
                  href="mailto:calciphertech@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  calciphertech@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-accent text-lg">
                  WhatsApp
                </span>
                <a 
                  href="https://wa.me/5513976032553" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  (13) 97603-2553
                </a>
              </div>
            </div>
          </div>

          {/* Links importantes */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Conformidade</h4>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">
                  gavel
                </span>
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Desenvolvemos em total conformidade com o 
                    <strong className="text-white"> Provimento 205/2021</strong> da OAB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © 2025 Calcipher Tech. Todos os direitos reservados.
            </p>
                      </div>

          {/* Badge de confiança */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
              <span className="material-symbols-outlined text-primary text-lg">
                verified
              </span>
              <span className="text-sm text-white/90">
                Site desenvolvido seguindo as melhores práticas de segurança e SEO
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;