import React, { useState } from 'react';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import CategoryCards from './components/CategoryCards';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';
import { getCarRecommendation } from './services/geminiService';
import { CarRecommendation, LoadingState } from './types';

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [recommendation, setRecommendation] = useState<CarRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoadingState(LoadingState.LOADING);
    setError(null);
    setRecommendation(null);
    
    try {
      const result = await getCarRecommendation(query);
      setRecommendation(result);
      setLoadingState(LoadingState.SUCCESS);
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao buscar sua recomendação. Por favor, tente novamente.");
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white selection:bg-blue-500 selection:text-white">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-3xl opacity-30" />
      </div>

      <main className="flex-grow w-full relative z-10 flex flex-col items-center">
        <Hero />
        
        <SearchForm onSearch={handleSearch} loadingState={loadingState} />

        {loadingState === LoadingState.ERROR && (
          <div className="mb-10 p-4 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg max-w-lg mx-6 text-center">
            {error}
          </div>
        )}

        {recommendation ? (
            <ResultDisplay result={recommendation} />
        ) : (
            <>
                {loadingState === LoadingState.IDLE && (
                    <div className="w-full text-center mb-10">
                        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-8">
                            Categorias Populares
                        </p>
                        <CategoryCards />
                    </div>
                )}
            </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;