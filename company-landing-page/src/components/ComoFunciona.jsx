import React from 'react';

const steps = [
  {
    // Plug de conexão
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#3BB273" strokeWidth="2"/>
        <rect x="14" y="19" width="16" height="6" rx="3" fill="#4F83CC"/>
        <rect x="19" y="16" width="6" height="12" rx="3" fill="#0033A0"/>
      </svg>
    ),
    title: "Entrada Plugável",
    desc: "O identificador do usuário — seja wallet, CPF, CNPJ ou outro ID — é recebido via API ou integração rápida, ativando instantaneamente o fluxo reputacional sem fricção ou burocracia.",
  },
  {
    // Checagem/checklist
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#4F83CC" strokeWidth="2"/>
        <rect x="13" y="13" width="18" height="18" rx="6" fill="#fff" stroke="#0033A0" strokeWidth="2"/>
        <path d="M18 24l4 3.2 5-7" stroke="#3BB273" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Validação Estrutural",
    desc: "A validação automática de integridade e formato garante que apenas informações confiáveis avancem no processo, eliminando fraudes, erros e dados inconsistentes já na entrada.",
  },
  {
    // Analytics/engrenagem
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#0033A0" strokeWidth="2"/>
        <rect x="13" y="28" width="4" height="8" rx="2" fill="#4F83CC"/>
        <rect x="20" y="20" width="4" height="16" rx="2" fill="#3BB273"/>
        <rect x="27" y="24" width="4" height="12" rx="2" fill="#0033A0"/>
        <circle cx="22" cy="12" r="4" fill="#4F83CC"/>
      </svg>
    ),
    title: "Enriquecimento Multi-Origem",
    desc: "Após a validação, a plataforma busca sinais adicionais em múltiplas fontes: histórico blockchain, bases financeiras, listas de compliance e dados comportamentais, construindo uma visão completa e contextualizada de cada perfil.",
  },
  {
    // Alerta/sinalização
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#D63649" strokeWidth="2"/>
        <rect x="18" y="12" width="8" height="14" rx="4" fill="#D63649"/>
        <circle cx="22" cy="31" r="3" fill="#fff" stroke="#D63649" strokeWidth="2"/>
      </svg>
    ),
    title: "Score & Flags em Tempo Real",
    desc: "Todos os dados e sinais são processados pelo ScoreLab, o motor proprietário de reputação, que calcula o score, aciona flags de risco (fraude, lavagem, abuso, trusted user) e gera recomendações inteligentes em tempo real.",
  },
  {
    // Decisão (check grande)
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#3BB273" strokeWidth="2"/>
        <path d="M15 22.5l6 6 8-12" stroke="#0033A0" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Decisão Automatizada Modular",
    desc: "Com base no score e nos alertas, o sistema executa decisões instantâneas — liberando, revisando ou bloqueando o acesso. Tudo é personalizado conforme a política de cada parceiro e pronto para integração nos fluxos de onboarding, crédito ou pagamentos.",
  },
  {
    // Registro/auditoria (ícone documento/caixa de arquivo)
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" fill="#F6F8FA" stroke="#0033A0" strokeWidth="2"/>
        <rect x="12" y="16" width="20" height="12" rx="3" fill="#4F83CC"/>
        <rect x="17" y="20" width="10" height="4" rx="1.7" fill="#fff"/>
        <rect x="18.5" y="21.5" width="7" height="1" rx="0.5" fill="#4F83CC"/>
      </svg>
    ),
    title: "Registro Imutável & Feedback Vivo",
    desc: "Cada decisão, alerta e análise fica registrada em log auditável e seguro, garantindo rastreabilidade total. O sistema evolui continuamente, aprendendo com cada evento e fortalecendo a reputação da operação.",
  },
];

const Arrow = ({ direction }) => (
  direction === 'down'
    ? (
      <span className="como-funciona-arrow como-funciona-arrow-down">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path d="M16 10v12M12 18l4 4 4-4" stroke="#0033A0" strokeWidth="2" fill="none" />
        </svg>
      </span>
    )
    : (
      <span className="como-funciona-arrow">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path d="M10 16h12M18 12l4 4-4 4" stroke="#0033A0" strokeWidth="2" fill="none" />
        </svg>
      </span>
    )
);

const ComoFunciona = () => (
  <section id="como-funciona" className="como-funciona-section">
    <h2 className="como-funciona-title">Como funciona</h2>
    <div className="como-funciona-steps-grid">
      {/* Primeira Linha */}
      <div className="como-funciona-row">
        {[0, 1, 2].map((i) => (
          <React.Fragment key={i}>
            <div className="como-funciona-step">
              <div className="como-funciona-icon">{steps[i].icon}</div>
              <div className="como-funciona-step-title">{steps[i].title}</div>
              <div className="como-funciona-step-desc">{steps[i].desc}</div>
            </div>
            {i < 2 && <Arrow direction="right" />}
          </React.Fragment>
        ))}
      </div>
      {/* Seta pra baixo entre as linhas */}
      <div className="como-funciona-arrow-center">
        <Arrow direction="down" />
      </div>
      {/* Segunda Linha */}
      <div className="como-funciona-row">
        {[3, 4, 5].map((i) => (
          <React.Fragment key={i}>
            <div className="como-funciona-step">
              <div className="como-funciona-icon">{steps[i].icon}</div>
              <div className="como-funciona-step-title">{steps[i].title}</div>
              <div className="como-funciona-step-desc">{steps[i].desc}</div>
            </div>
            {i < 5 && <Arrow direction="right" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFunciona;
