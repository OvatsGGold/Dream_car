import React from 'react';
import { CarFront } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="text-center pt-16 pb-12 px-4 relative z-10 animate-fade-in-down">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]">
          <CarFront className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
        Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">dream car</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
        Descreva as características do seu carro ideal e o aplicativo irá achar ele para você
      </p>
    </div>
  );
};

export default Hero;