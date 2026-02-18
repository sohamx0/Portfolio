import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center relative z-10">
      <div className="flex items-center justify-center gap-8 mb-8">
        <a href="https://www.instagram.com/soham23_esz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
            <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
            <Twitter size={18} />
        </a>
        <a href="https://www.linkedin.com/in/soham-maid-6a738232a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
            <Linkedin size={18} />
        </a>
        <a href="https://github.com/sohamx0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
            <Github size={18} />
        </a>
      </div>
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Soham Maid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;