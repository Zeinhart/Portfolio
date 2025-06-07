import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            
          <a
          href="https://example.com/path/to/your/file.pdf"
          target="_blank"
          className="w-8 h-8"
          >
              <img
              src="https://media1.tenor.com/m/0Rst3ki8tgsAAAAd/nanaya-nanaya-shiki.gif"
              alt="Logo"
              className="w-full h-full rounded-full"
                />
          </a>

            <a href="https://drive.google.com/drive/u/1/folders/1dOW9yrnIceOCgvlKr3khQ2BbAWH4ZtRu" target="_blank" className="font-mono text-xl font-bold text-white">
  My<span className="text-blue-500">.Resume</span>
</a>
          </div>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};