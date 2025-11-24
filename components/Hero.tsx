import React from 'react';
import { CarFront } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="text-center pt-20 pb-10 px-4 relative z-10">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm animate-pulse">
          <CarFront className="w-16 h-16 text-blue-400" />
        </div>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
        Find your <span className="text-blue-400">dream car</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
        Descreva as características do seu carro ideal e o aplicativo irá achar ele para você
      </p>
    </div>
  );
};

export default Hero;