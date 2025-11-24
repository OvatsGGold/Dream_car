import React from 'react';
import { CarRecommendation } from '../types';
import { CheckCircle2, DollarSign, Calendar, Tag, Info } from 'lucide-react';
import { IMAGES } from '../constants';

interface ResultDisplayProps {
  result: CarRecommendation | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 mb-20 animate-fade-in-up">
      <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        <div className="relative h-64 md:h-80">
            {/* Since we don't have a real image API for the result, we use a generic high quality car 'reveal' image */}
            <img 
                src={IMAGES.RESULT_PLACEHOLDER}
                alt="Recommended Car"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                    Recomendação
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {result.make} <span className="text-blue-400">{result.model}</span>
                </h2>
                <div className="flex items-center gap-4 mt-2 text-slate-300">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{result.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{result.category}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                        <Info className="w-5 h-5 text-blue-400" />
                        Por que este carro?
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                        {result.reason}
                    </p>
                </div>
                
                <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700">
                     <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        Faixa de Preço Estimada
                    </h3>
                    <p className="text-green-300 font-mono text-lg">
                        {result.estimatedPriceRange}
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white mb-4">Principais Características</h3>
                <ul className="space-y-3">
                    {result.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ResultDisplay;