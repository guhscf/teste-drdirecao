export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-gray-100 to-white text-center py-16 px-4 mt-16"
    >

      <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
        Oficina de Direção Hidráulica
      </h1>

      <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        Mais de 18 anos de experiência cuidando da sua segurança na estrada.
      </p>

      <a
        href="#contato"
        className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Fale Conosco
      </a>
    </section>
  );
}
