import React from 'react';
import { IMAGES } from '../constants';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6">
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-300 text-sm font-medium">{description}</p>
    </div>
  </div>
);

const CategoryCards: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card 
          image={IMAGES.LUXURY}
          title="Esportivo & Luxo"
          description="Performance superior e acabamento premium."
        />
        <Card 
          image={IMAGES.ECONOMY}
          title="Econômico & Hatch"
          description="Eficiência para o dia a dia na cidade."
        />
        <Card 
          image={IMAGES.SUV}
          title="SUV & Off-road"
          description="Espaço e potência para qualquer terreno."
        />
      </div>
    </section>
  );
};

export default CategoryCards;