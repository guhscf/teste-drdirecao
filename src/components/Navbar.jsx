import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        
        {/* Logo + Nome maiores */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/LogoSemTexto.png" // coloque sua logo em public/
            alt="Logo DR Direção"
            className="h-14 w-auto" // logo maior
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            DR Direção
          </h1>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8 text-lg">
          <a href="#inicio" className="hover:text-blue-400">Início</a>
          <a href="#servicos" className="hover:text-blue-400">Serviços</a>
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#galeria" className="hover:text-blue-400">Galeria</a>
          <a href="#depoimentos" className="hover:text-blue-400">Depoimentos</a>
          <a href="#contato" className="hover:text-blue-400">Contato</a>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-gray-800 p-4 space-y-3 text-lg">
          <a href="#inicio" className="hover:text-blue-400">Início</a>
          <a href="#servicos" className="hover:text-blue-400">Serviços</a>
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#galeria" className="hover:text-blue-400">Galeria</a>
          <a href="#depoimentos" className="hover:text-blue-400">Depoimentos</a>
          <a href="#contato" className="hover:text-blue-400">Contato</a>
        </div>
      )}
    </nav>
  );
}
