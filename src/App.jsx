import React from 'react';
import Presentation from './components/Presentation';

export default function App() {
  return (
    <div className="w-full h-full min-h-screen bg-[#0E060A] text-slate-100 flex flex-col font-sans selection:bg-[#FF5A36]/30 selection:text-white">
      <Presentation />
    </div>
  );
}
