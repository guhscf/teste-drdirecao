import { useState } from "react";

const servicos = [
  {
    titulo: "Reparo de Caixa de Direção",
    descricao:
      "Corrige vazamentos, folgas e ruídos na caixa de direção, garantindo segurança e dirigibilidade.",
  },
  {
    titulo: "Troca de Óleo da Direção Hidráulica",
    descricao:
      "Substituição do fluido da direção hidráulica para melhorar o desempenho e prolongar a vida útil do sistema.",
  },
  {
    titulo: "Revisão Completa do Sistema",
    descricao:
      "Inspeção detalhada dos componentes da direção hidráulica para identificar falhas e prevenir problemas futuros.",
  },
  {
    titulo: "Caixa de direção mecânica para coluna elétrica",
    descricao:
      "",
  },
];

export default function Servicos() {
  const [aberto, setAberto] = useState(null);

  const toggleDescricao = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <section id="servicos" className="py-16 bg-white px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
        Nossos Serviços
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {servicos.map((s, i) => (
          <div
            key={i}
            onClick={() => toggleDescricao(i)}
            className="cursor-pointer bg-gray-50 shadow hover:shadow-lg transition rounded-lg p-6 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {s.titulo}
            </h3>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                aberto === i ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-600">{s.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
