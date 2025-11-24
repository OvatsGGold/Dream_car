import React from 'react';
import { FOOTER_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 font-medium text-sm">
          {FOOTER_TEXT}
        </p>
      </div>
    </footer>
  );
};

export default Footer;