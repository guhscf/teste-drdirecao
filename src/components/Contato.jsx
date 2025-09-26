export default function Contato() {
  return (
    <section id="contato" className="py-16 bg-gray-50 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Entre em Contato
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Coluna Esquerda: informações */}
        <div>
          <p className="text-gray-600 mb-6">
            Ligue, envie uma mensagem no WhatsApp ou faça-nos uma visita.
          </p>

          {/* Botões responsivos */}
          <div className="flex flex-col md:flex-row gap-3">
            <a
              href="tel:+5541998895885"
              className="w-auto bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition shadow-sm flex items-center gap-2"
            >
              📞 Ligar Agora
            </a>
            <a
              href="https://wa.me/5541998895885?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto bg-green-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-green-700 transition shadow-sm flex items-center gap-2"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Informações de contato */}
          <div className="mt-6 text-gray-700 space-y-1 text-sm">
            <p><strong>Endereço:</strong> Rua Francisco de Paula Sobrinho 48, Esquina com Av. Jornalista Aderbal Gaertner Stresser - Curitiba/PR</p>
            <p><strong>Telefone:</strong> (41) 99889-5885</p>
            <p><strong>Horário:</strong> Seg a Sex - 8h às 18h</p>
          </div>
        </div>

        {/* Coluna Direita: mapa */}
        <div className="w-full h-80 md:h-96">
          <iframe
            title="Localização da Oficina DR Direção"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0225468135086!2d-49.20440992445266!3d-25.470922577535806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf106d9ebadef%3A0x89594ba2be7fc472!2zRCBSIERpcmXDp8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1758753814315!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
