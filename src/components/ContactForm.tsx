import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    website: '',
    objetivo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      console.log('Formulário enviado:', formData);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">
            check_circle
          </span>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Solicitação Enviada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Obrigado pelo seu interesse! Entraremos em contato em até 2 horas úteis 
          para agendar sua análise gratuita.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <span className="material-symbols-outlined text-lg">
            access_time
          </span>
          <span>Resposta em até 2 horas úteis</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Análise Gratuita do seu Projeto
        </h3>
        <p className="text-muted-foreground">
          Preencha os dados abaixo e receba uma proposta personalizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="form-label">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Seu nome completo"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="seu@email.com"
            required
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="form-label">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            className="form-input"
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        {/* Website Atual */}
        <div>
          <label htmlFor="website" className="form-label">
            Website Atual
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="form-input"
            placeholder="www.seusite.com.br (se houver)"
          />
        </div>

        {/* Objetivo Principal */}
        <div>
          <label htmlFor="objetivo" className="form-label">
            Qual o principal objetivo do seu projeto? *
          </label>
          <select
            id="objetivo"
            name="objetivo"
            value={formData.objetivo}
            onChange={handleInputChange}
            className="form-input"
            required
          >
            <option value="">Selecione uma opção</option>
            <option value="criar-primeiro-site">Criar meu primeiro site profissional</option>
            <option value="reformular-site">Reformular site existente</option>
            <option value="gerar-mais-leads">Gerar mais leads qualificados</option>
            <option value="melhorar-credibilidade">Melhorar credibilidade online</option>
            <option value="conformidade-oab">Garantir conformidade com a OAB</option>
            <option value="outros">Outros objetivos</option>
          </select>
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-hero flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Solicitar Análise Gratuita</span>
              <span className="material-symbols-outlined">
                send
              </span>
            </>
          )}
        </button>

        {/* Informações de privacidade */}
        <div className="text-xs text-muted-foreground border-t border-border pt-4">
          <div className="flex items-start space-x-2">
            <span className="material-symbols-outlined text-sm text-primary mt-0.5">
              lock
            </span>
            <p>
              Seus dados são tratados com total segurança e não serão compartilhados 
              com terceiros. Usamos essas informações apenas para entrar em contato 
              sobre sua solicitação.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;