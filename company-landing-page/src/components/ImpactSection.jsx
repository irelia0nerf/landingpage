import React, { useEffect, useState, useRef } from 'react';

// Dados para o componente
const diferenciaisData = [
  '2.100 wallets únicas analisadas e auditadas',
  'ZERO incidentes de vazamento ou comprometimento de dados reportados',
  '34 incidentes de risco real detectados e bloqueados antes do prejuízo',
  'Compliance: 100% compatível com LGPD, padrões Open Finance e requisitos de auditoria independente',

];

const impactoKpisData = [
  {
    label: 'Movimentações monitoradas',
    value: 'R$19,8', // Manter a unidade aqui para o formatador
    description: 'movimentações monitoradas com score e flags automáticas.',
    isNumeric: true, // Flag para identificar se o valor deve ser animado
  },
  {
    label: 'Uptime',
    value: '98,7%',
    description: 'uptime comprovado em produção real.',
    isNumeric: true, // Este valor não é numérico, não será animado
  },
  {
    label: 'Requisições API processadas',
    value: '36.970', // Manter a unidade aqui
    description: 'requisições API processadas em ambiente de produção (2024).',
    isNumeric: true,
  },
];

// ========== FUNÇÕES E COMPONENTE COUNTUP ==========
// (Copiei e adaptei as funções do seu exemplo ValueSection)

const parseNumber = (value) => {
  const valStr = String(value);
  if (valStr.includes("B")) return parseFloat(valStr.replace(/[^\d.]/g, "")) * 1_000_000_000;
  if (valStr.includes("M")) return parseFloat(valStr.replace(/[^\d.]/g, "")) * 1_000_000;
  if (valStr.includes("K")) return parseFloat(valStr.replace(/[^\d.]/g, "")) * 1_000;
  if (valStr.includes("$")) return parseFloat(valStr.replace(/[^\d.]/g, ""));
  if (valStr.endsWith("ms")) return parseFloat(valStr.replace("ms", ""));
  if (valStr.endsWith("%")) return parseFloat(valStr.replace("%", ""));
  
  const parsed = parseFloat(valStr.replace(/[^\d.]/g, ""));
  return isNaN(parsed) ? 0 : parsed; // Retorna 0 se não for um número após limpeza
};

const formatNumber = (originalValue, currentValue) => {
  const originalStr = String(originalValue);

  if (originalStr.includes("B")) return (currentValue / 1_000_000_000).toFixed(2) + "B+";
  if (originalStr.includes("M")) return (currentValue / 1_000_000).toFixed(2) + "M+";
  if (originalStr.includes("K")) return Math.floor(currentValue / 1_000) + "K+";
  if (originalStr.includes("$")) { // Para valores em dólar, formata como moeda
    return "$" + Math.floor(currentValue).toLocaleString() + (originalStr.match(/[a-zA-Z+]$/) ? "" : "+");
  }
  if (originalStr.endsWith("ms")) return Math.floor(currentValue) + "ms";
  if (originalStr.endsWith("%")) return currentValue.toFixed(1) + "%"; // Ex: 99.8%

  // Para números simples que tinham "+" no final
  if (originalStr.endsWith("+") && !originalStr.match(/[BKM]$|\$$/)) {
      return Math.floor(currentValue) + "+";
  }
  return String(Math.floor(currentValue)); // Formatação padrão
};


const CountUpNumber = ({ originalValue, startAnimation }) => {
  const [count, setCount] = useState(0);
  // Usamos parseNumber(originalValue) para definir o 'end' numérico
  const end = parseNumber(originalValue);

  useEffect(() => {
    if (!startAnimation) {
      // Se a animação não deve começar, podemos resetar para 0 ou para o valor final parseado sem animação
      // Para este caso, vamos resetar para 0 e deixar a animação começar do zero.
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 2000; // 2 segundos de animação
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Para porcentagens, podemos querer uma animação mais suave com decimais
      if (String(originalValue).endsWith("%")) {
        setCount(parseFloat((progress * end).toFixed(1)));
      } else {
        setCount(Math.floor(progress * end));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Garante que o valor final seja exato
      }
    }

    requestAnimationFrame(animate);

    // Cleanup: se o componente for desmontado ou startAnimation mudar
    return () => {
        // Para evitar setar estado em componente desmontado,
        // podemos apenas garantir que o valor final seja o 'end' se a animação completou.
        // No entanto, o requestAnimationFrame já cuida disso.
        // A principal preocupação aqui seria cancelar o requestAnimationFrame.
        // Mas como a animação é curta e controlada por 'startAnimation',
        // o comportamento atual de resetar quando startAnimation=false é geralmente suficiente.
    };
  }, [end, originalValue, startAnimation]);

  // Formata o número atual de volta para a string com a unidade/símbolo original
  return <span>{formatNumber(originalValue, count)}</span>;
};


// ========== COMPONENTE PRINCIPAL ImpactSection ==========
const ImpactSection = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Anima apenas uma vez
        }
      },
      {
        threshold: 0.25, // Inicia quando 25% do componente estiver visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) { // eslint-disable-line
        observer.disconnect();
      }
    };
  }, []); // Executa apenas uma vez na montagem

  return (
    <div className="impact-section-container" ref={sectionRef}>
      <div className="impact-grid">
        {/* Coluna dos Diferenciais */}
        <div className="impact-column diferenciais-column">
          <h3 className="impact-column-title">Diferenciais</h3>
          <ul className="diferenciais-list">
            {diferenciaisData.map((item, index) => (
              <li key={index} className="diferenciais-item">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna do Impacto Real (KPIs) */}
        <div className="impact-column kpis-column">
          <h3 className="impact-column-title">Impacto Real: KPIs que Demonstram Valor</h3>
          <div className="kpis-showcase">
            {impactoKpisData.map((kpi, index) => (
              <div key={index} className="kpi-item">
                <span className="kpi-item-label">{kpi.label}:</span>
                <span className="kpi-item-value">
                  {kpi.isNumeric ? (
                    <CountUpNumber
                      originalValue={kpi.value}
                      startAnimation={startAnimation}
                    />
                  ) : (
                    kpi.value // Mostra o valor estático se não for numérico
                  )}
                </span>
                <p className="kpi-item-description">{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;