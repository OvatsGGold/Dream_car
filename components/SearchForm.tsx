import React, { useState } from 'react';
import { Search, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { LoadingState } from '../types';

interface SearchFormProps {
  onSearch: (query: string) => void;
  loadingState: LoadingState;
}

const SUGGESTIONS = [
  "🚙 SUV seguro para família de 5 pessoas",
  "⛽ Carro econômico para usar na cidade",
  "🏎️ Esportivo para finais de semana",
  "⚡ Elétrico com boa autonomia",
  "🏔️ 4x4 robusto para aventuras off-road"
];

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loadingState }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Remove emojis for the actual query, keeps it clean
    const cleanSuggestion = suggestion.replace(/[\u{1F600}-\u{1F6FF}|[\u{2600}-\u{26FF}]/gu, '').trim(); 
    setQuery(cleanSuggestion);
  };

  const isSubmitting = loadingState === LoadingState.LOADING;

  return (
    <section className="w-full max-w-4xl mx-auto px-6 relative z-20 -mt-6 mb-16">
      {/* Main Glass Container */}
      <div className="bg-slate-800/60 backdrop-blur-xl p-1 rounded-3xl shadow-2xl border border-slate-700/50 ring-1 ring-white/10 transition-all duration-500 hover:bg-slate-800/70">
        
        <form onSubmit={handleSubmit} className="flex flex-col p-6 md:p-8">
          
          {/* Header Area */}
          <div className="flex items-center gap-2 mb-4 text-blue-300 font-medium text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Assistente de IA</span>
          </div>

          <label htmlFor="car-description" className="sr-only">Descreva seu carro ideal</label>
          
          {/* Text Area Container */}
          <div className="relative group">
            <textarea
              id="car-description"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Olá! Me conte como é o seu dia a dia e o que você valoriza em um carro. Ex: 'Preciso de um carro confiável para ir ao trabalho e viajar para a praia...'"
              className="w-full h-40 bg-slate-900/40 text-white placeholder-slate-400/70 rounded-2xl p-6 text-lg focus:ring-2 focus:ring-blue-500/50 focus:bg-slate-900/60 focus:outline-none border border-slate-600/30 hover:border-slate-500/50 transition-all resize-none leading-relaxed"
              disabled={isSubmitting}
            />
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 p-3 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="mt-6 mb-6">
            <p className="text-slate-400 text-xs font-semibold mb-3 ml-1">SUGESTÕES RÁPIDAS:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded-full bg-slate-700/40 border border-slate-600/50 text-slate-300 text-sm hover:bg-blue-600/20 hover:text-blue-200 hover:border-blue-500/30 transition-all duration-200 active:scale-95 text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between border-t border-slate-700/30 pt-6 mt-2">
             <div className="hidden md:block text-slate-500 text-sm italic">
               A IA irá analisar milhares de modelos para você.
             </div>
            <button
              type="submit"
              disabled={!query.trim() || isSubmitting}
              className={`
                flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ml-auto w-full md:w-auto justify-center
                ${!query.trim() || isSubmitting 
                  ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed border border-slate-700' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-500/50'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Encontrar meu carro
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;