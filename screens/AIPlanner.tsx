
import React, { useState, useEffect } from 'react';

const AIPlanner: React.FC = () => {
  const [view, setView] = useState<'hub' | 'creating' | 'syncing'>('hub');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (view === 'creating' || view === 'syncing') {
      const interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 1 : prev));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [view]);

  if (view === 'creating') return <CreationView onComplete={() => setView('syncing')} />;
  if (view === 'syncing') return <SyncView onBack={() => setView('hub')} />;

  return (
    <div className="p-0">
      <nav className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full overflow-hidden border border-secondary/20 bg-cover" style={{ backgroundImage: `url("https://picsum.photos/id/64/100/100")` }} />
          <div>
            <p className="text-[10px] font-bold text-secondary tracking-widest uppercase">Director Mode</p>
            <h1 className="text-base font-bold leading-none">Hi, Alex</h1>
          </div>
        </div>
        <button className="size-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
      </nav>

      <main className="px-6 space-y-8">
        <header className="mt-4">
          <div className="bg-white rounded-lg p-6 shadow-xl shadow-secondary/5 border border-secondary/10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/25">
                  <span className="material-symbols-outlined text-white fill-icon">auto_awesome</span>
                </div>
                <div>
                  <h2 className="text-sm font-bold text-secondary uppercase">Planning with AI</h2>
                  <p className="text-[10px] text-gray-400">Director is active</p>
                </div>
              </div>
              <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold">85% Ready</div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-bold">Tokyo Trip Draft</h3>
                  <span className="text-[10px] font-medium text-gray-400">Finalizing Saturday</span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[85%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-xl border border-secondary/10 flex gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">info</span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  "I've drafted a route based on your interest in <span className="font-bold text-gray-900">Art & Sushi</span>. Shall we look at the Saturday evening gallery crawl?"
                </p>
              </div>
              <button 
                onClick={() => setView('creating')}
                className="w-full bg-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Pick up where we left off</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </header>

        <section>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Upcoming Logistics</h3>
          <div className="grid grid-cols-2 gap-4">
            <LogisticCard icon="flight_takeoff" color="text-secondary" label="Departure" value="2 Days" footer="JFK Terminal 4" />
            <LogisticCard icon="schedule" color="text-orange-500" label="Transit" value="11:00 AM" footer="Advised leave time" />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Remaining Tasks</h3>
            <span className="text-[10px] font-bold text-secondary">View All</span>
          </div>
          <div className="space-y-3">
            <TaskItem icon="luggage" color="bg-orange-100 text-orange-600" title="Update Packing List" desc="Based on Tokyo rain forecast" />
            <TaskItem icon="verified" color="bg-green-100 text-green-600" title="Visa Status" desc="Travel Docs Secured" />
          </div>
        </section>
      </main>
    </div>
  );
};

const CreationView = ({ onComplete }: any) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(t);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-screen bg-background-light flex flex-col items-center justify-between px-6 py-12">
      <div className="w-full flex justify-between">
        <button className="p-2 rounded-full bg-white shadow-sm"><span className="material-symbols-outlined">close</span></button>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest">AI Planning</span>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="relative size-40 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-secondary/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full border-2 border-secondary animate-pulse"></div>
          <div className="size-28 rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/50">
            <span className="material-symbols-outlined text-white text-4xl fill-icon">auto_awesome</span>
          </div>
          <svg className="absolute -inset-4 size-48 -rotate-90">
            <circle cx="96" cy="96" r="92" fill="none" stroke="#e0e7ff" strokeWidth="4" />
            <circle cx="96" cy="96" r="92" fill="none" stroke="#197fe6" strokeWidth="4" strokeDasharray="578" strokeDashoffset={578 - (578 * progress) / 100} />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">AI Magic Creation</h2>
          <p className="text-secondary font-medium">Finding best flights for 4 people...</p>
          <p className="text-gray-400 text-sm">Optimizing for everyone's budget</p>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <div className="flex justify-between items-center text-xs font-bold">
          <span>Overall Progress</span>
          <span className="text-secondary">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-secondary rounded-full transition-all" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex gap-2">
          <span className="material-symbols-outlined text-secondary text-lg">info</span>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            Our AI is analyzing thousands of flight options and local activities to build a custom itinerary for you.
          </p>
        </div>
      </div>
    </div>
  );
};

const SyncView = ({ onBack }: any) => (
  <div className="h-screen bg-[#221a10] text-white flex flex-col overflow-hidden">
    <div className="p-6 pt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary animate-spin">sync</span>
          </div>
          <div>
            <h2 className="text-lg font-bold">Syncing New Plans...</h2>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Real-time AI optimization</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          <span className="material-symbols-outlined text-primary text-sm">cloud</span>
          <span className="text-[10px] font-bold text-primary uppercase">Weather Alert</span>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-400">Recalculating group transit routes...</span>
          <span className="text-primary font-bold">65%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[65%] rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-6 space-y-8">
      <SyncItem status="done" time="09:00 AM" title="Breakfast at Hotel" subtitle="Completed" />
      <div className="opacity-50 scale-95 blur-[2px]">
        <SyncItem status="moving" time="11:30 AM" title="Outdoor Market" subtitle="Moving to tomorrow due to rain..." />
      </div>
      <div className="bg-[#2d2418] border-2 border-primary rounded-2xl p-4 shadow-2xl shadow-primary/20">
        <div className="flex justify-between mb-2">
          <span className="text-[8px] font-black uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded-full">AI Suggested</span>
          <span className="text-xs font-bold text-primary">11:30 AM</span>
        </div>
        <h3 className="text-base font-bold mb-1">Indoor Gallery Visit</h3>
        <p className="text-[10px] text-gray-400">Perfect alternative for rainy weather. 4.8 stars nearby.</p>
        <div className="mt-3 flex -space-x-2">
          {[1,2,3,4].map(i => <img key={i} src={`https://picsum.photos/id/${60+i}/50/50`} className="size-6 rounded-full border-2 border-[#2d2418]" />)}
        </div>
      </div>
    </div>

    <div className="p-6 pb-32">
      <button onClick={onBack} className="w-full bg-primary text-black font-bold py-4 rounded-full shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
        <span>View Changes</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  </div>
);

const SyncItem = ({ status, time, title, subtitle }: any) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`size-8 rounded-full flex items-center justify-center border-2 ${status === 'done' ? 'border-green-500 bg-green-500/10 text-green-500' : 'border-primary text-primary bg-primary/10'}`}>
        <span className="material-symbols-outlined text-sm">{status === 'done' ? 'check' : 'location_on'}</span>
      </div>
      <div className="w-px bg-gray-700 grow mt-2"></div>
    </div>
    <div className="pb-4">
      <p className={`text-xs font-bold ${status === 'done' ? 'text-gray-500' : 'text-primary'}`}>{time}</p>
      <h3 className={`text-base font-bold ${status === 'done' ? 'text-gray-500' : 'text-white'}`}>{title}</h3>
      <p className="text-[10px] text-gray-500 italic">{subtitle}</p>
    </div>
  </div>
);

const LogisticCard = ({ icon, color, label, value, footer }: any) => (
  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
    <div className="flex items-center gap-2 mb-3">
      <span className={`material-symbols-outlined text-xl ${color}`}>{icon}</span>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{label}</span>
    </div>
    <p className="text-lg font-bold">{value}</p>
    <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-tight">{footer}</p>
  </div>
);

const TaskItem = ({ icon, color, title, desc }: any) => (
  <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className={`size-10 rounded-full flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-[10px] text-gray-400">{desc}</p>
      </div>
    </div>
    <span className="material-symbols-outlined text-gray-200">chevron_right</span>
  </div>
);

export default AIPlanner;
