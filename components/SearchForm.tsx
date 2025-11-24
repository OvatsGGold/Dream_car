import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { LoadingState } from '../types';

interface SearchFormProps {
  onSearch: (query: string) => void;
  loadingState: LoadingState;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loadingState }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const isSubmitting = loadingState === LoadingState.LOADING;

  return (
    <section className="w-full max-w-3xl mx-auto px-6 relative z-20 -mt-4 mb-20">
      <div className="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-slate-700/50">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <label htmlFor="car-description" className="sr-only">Descreva seu carro ideal</label>
          <textarea
            id="car-description"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex: Procuro um carro econômico para a cidade, mas que tenha espaço para viajar no fim de semana..."
            className="w-full h-32 bg-slate-900/50 text-white placeholder-slate-400 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-slate-700 transition-all resize-none text-lg"
            disabled={isSubmitting}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!query.trim() || isSubmitting}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105
                ${!query.trim() || isSubmitting 
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/25'
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Encontrar
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