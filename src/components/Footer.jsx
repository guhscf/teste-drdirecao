export default function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center px-4">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} Oficina de Direção Hidráulica - Todos os
        direitos reservados
      </p>
    </footer>
  );
}
