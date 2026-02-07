
import React, { useState } from 'react';
import { getTripReliveSummary } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [reliveSummary, setReliveSummary] = useState<string | null>(null);
  const [loadingRelive, setLoadingRelive] = useState(false);

  const handleRelive = async () => {
    setLoadingRelive(true);
    const summary = await getTripReliveSummary("Paris 2023", { distance: 24, explored: 12 });
    setReliveSummary(summary);
    setLoadingRelive(false);
  };

  return (
    <div className="p-0">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-50 bg-background-light/80 backdrop-blur-md">
        <div className="flex size-10 shrink-0 items-center">
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" 
            style={{ backgroundImage: `url("https://picsum.photos/id/64/100/100")` }}
          />
        </div>
        <h2 className="text-lg font-bold flex-1 text-center font-display">Welcome Home, Alex</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex items-center justify-center rounded-full h-10 w-10">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {/* Polaroid Header */}
      <div className="px-4 py-4 overflow-hidden">
        <div className="relative h-[340px] w-full flex items-center justify-center">
          <div className="absolute transform -rotate-6 translate-x-[-20px] translate-y-2 w-64 h-80 bg-white p-3 rounded-sm polaroid-shadow">
            <div 
              className="w-full h-60 bg-cover bg-center mb-2" 
              style={{ backgroundImage: `url("https://picsum.photos/id/10/400/600")` }}
            />
            <p className="text-[10px] text-center text-gray-400 font-medium">Paris Sunset, Day 2</p>
          </div>
          <div className="absolute transform rotate-3 translate-x-[20px] translate-y-4 w-64 h-80 bg-white p-3 rounded-sm polaroid-shadow">
            <div 
              className="w-full h-60 bg-cover bg-center mb-2" 
              style={{ backgroundImage: `url("https://picsum.photos/id/42/400/600")` }}
            />
            <p className="text-[10px] text-center text-gray-400 font-medium">Morning Crepes in Le Marais</p>
          </div>
          <div className="absolute transform -rotate-1 w-64 h-80 bg-white p-3 rounded-sm polaroid-shadow z-10">
            <div 
              className="w-full h-60 bg-cover bg-center mb-2" 
              style={{ backgroundImage: `url("https://picsum.photos/id/22/400/600")` }}
            />
            <p className="text-[12px] text-center text-[#181411] font-bold">The Whole Crew, Paris 2023</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="mt-4 px-4">
        <h3 className="text-lg font-bold px-1 pb-3">Your Journey in Numbers</h3>
        <div className="flex gap-3">
          <div className="flex flex-1 flex-col gap-1 rounded-xl p-5 border border-gray-100 bg-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary scale-75">directions_walk</span>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Distance</p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-extrabold">24</p>
              <p className="text-sm font-bold">km</p>
            </div>
            <p className="text-success text-[10px] font-bold bg-green-50 px-1.5 py-0.5 rounded w-fit">+15% vs Tokyo</p>
          </div>
          <div className="flex flex-1 flex-col gap-1 rounded-xl p-5 border border-gray-100 bg-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary scale-75">location_on</span>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Explored</p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-extrabold">12</p>
              <p className="text-sm font-bold">places</p>
            </div>
            <p className="text-primary text-[10px] font-bold px-1.5 py-0.5 w-fit uppercase">New Record!</p>
          </div>
        </div>
      </section>

      {/* Shared Expenses Section */}
      <section className="mt-8 px-4">
        <div className="relative overflow-hidden rounded-xl bg-primary/5 p-5 border border-primary/10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-base font-bold">Shared Expenses</h4>
              <p className="text-sm text-gray-500">Pending settlements with friends</p>
            </div>
            <div className="bg-primary text-white rounded-full px-2.5 py-1 text-[10px] font-bold uppercase">Active</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cover" style={{ backgroundImage: `url("https://picsum.photos/id/65/100/100")` }} />
                <span className="text-sm font-medium">Sarah</span>
              </div>
              <span className="text-sm font-bold text-red-500">-$45.20</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cover" style={{ backgroundImage: `url("https://picsum.photos/id/11/100/100")` }} />
                <span className="text-sm font-medium">James</span>
              </div>
              <span className="text-sm font-bold text-success">+$12.00</span>
            </div>
          </div>
          <button className="mt-5 w-full bg-white text-primary border border-primary/20 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/5 transition-colors">
            Review All Splits
          </button>
        </div>
      </section>

      {/* Memories Section */}
      <section className="mt-8 px-4">
        <h3 className="text-lg font-bold pb-3">Memories to Cherish</h3>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
          <div className="size-16 shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("https://picsum.photos/id/225/200/200")` }} />
          <div className="flex-1">
            <p className="text-xs text-primary font-bold uppercase mb-0.5">One week ago</p>
            <p className="text-sm font-bold">How was "Le Comptoir"?</p>
            <p className="text-xs text-gray-400">Share your review and earn 50 points.</p>
          </div>
          <span className="material-symbols-outlined text-gray-300">chevron_right</span>
        </div>
      </section>

      {/* Relive Modal / View */}
      {reliveSummary && (
        <div className="mx-4 mt-4 p-4 rounded-xl bg-gradient-to-br from-primary to-orange-600 text-white shadow-xl animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-white fill-icon">auto_awesome</span>
            <p className="text-xs font-bold uppercase tracking-widest">AI Trip Relive</p>
          </div>
          <p className="text-sm font-medium leading-relaxed italic">"{reliveSummary}"</p>
          <button onClick={() => setReliveSummary(null)} className="mt-3 text-[10px] uppercase font-bold text-white/70 hover:text-white">Close Summary</button>
        </div>
      )}

      {/* Bottom Primary CTA */}
      <div className="px-4 mt-8 pb-4">
        <button 
          onClick={handleRelive}
          disabled={loadingRelive}
          className="flex w-full items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span className={`material-symbols-outlined ${loadingRelive ? 'animate-spin' : ''}`}>
            {loadingRelive ? 'progress_activity' : 'auto_awesome'}
          </span>
          {loadingRelive ? 'Summarizing...' : 'Relive This Trip'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
