
import React from 'react';

const Itinerary: React.FC = () => {
  return (
    <div className="p-0">
      <header className="sticky top-0 z-20 bg-background-light/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">arrow_back_ios</span>
            <div>
              <h2 className="text-lg font-bold">Japan Adventure</h2>
              <p className="text-gray-400 text-xs font-medium">Oct 12 - Oct 24 • 2 Guests</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-full bg-secondary text-white shadow-md">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
        <div className="flex px-4 gap-8">
          <div className="border-b-[3px] border-secondary text-secondary pb-2 pt-2 px-1">
            <p className="text-sm font-bold tracking-wide">Timeline</p>
          </div>
          <div className="text-gray-400 pb-2 pt-2 px-1">
            <p className="text-sm font-bold tracking-wide">Map</p>
          </div>
          <div className="text-gray-400 pb-2 pt-2 px-1">
            <p className="text-sm font-bold tracking-wide">Docs</p>
          </div>
        </div>
      </header>

      <main className="p-4 space-y-2">
        {/* Day 1: Past */}
        <section className="opacity-60">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-200 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-gray-600">OCT 12</span>
            </div>
            <h3 className="text-base font-bold">Arrival in Tokyo</h3>
          </div>
          <TimelineEntry icon="flight_land" title="Flight JL001 • SFO to NRT" subtitle="Arrived at 9:30 AM • Terminal 2" status="Arrived" statusColor="text-green-600" />
          <TimelineEntry icon="hotel" title="Park Hyatt Tokyo" subtitle="Checked in at 3:00 PM" />
        </section>

        {/* Day 2: Today */}
        <section className="mt-6">
          <div className="flex items-center gap-3 mb-4 sticky top-[100px] z-10 bg-background-light/95 py-2">
            <div className="bg-secondary px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-white uppercase">Today • Oct 13</span>
            </div>
            <h3 className="text-base font-bold">Exploring Shibuya</h3>
            <div className="ml-auto flex items-center gap-1 text-secondary">
              <span className="material-symbols-outlined text-sm">sunny</span>
              <span className="text-xs font-bold">22°C</span>
            </div>
          </div>
          
          <div className="grid grid-cols-[40px_1fr] gap-x-2">
            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full bg-secondary text-white flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-lg">explore</span>
              </div>
              <div className="w-[1.5px] bg-secondary grow border-dashed mt-1 min-h-[40px]"></div>
            </div>
            <div className="pb-6">
              <div className="rounded-xl bg-white border-2 border-secondary p-4 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Now</span>
                    <p className="font-bold text-base mt-1">Meiji Jingu Forest Walk</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      10:00 AM - 12:00 PM
                    </p>
                  </div>
                  <img src="https://picsum.photos/id/28/100/100" className="size-16 rounded-lg object-cover" />
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-secondary text-white text-xs font-bold py-2 rounded-lg">Directions</button>
                  <button className="flex-1 bg-secondary/10 text-secondary text-xs font-bold py-2 rounded-lg">Check-in</button>
                </div>
              </div>
            </div>
          </div>

          <TimelineEntry icon="restaurant" title="Omakase Dinner" subtitle="7:30 PM • Sukiyabashi Jiro" showChevron />
        </section>

        {/* Day 3: Conflict */}
        <section className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-200 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-gray-600">OCT 14</span>
            </div>
            <h3 className="text-base font-bold">Art & Culture</h3>
          </div>
          
          <div className="grid grid-cols-[40px_1fr] gap-x-2">
            <div className="flex flex-col items-center">
              <div className="size-8 rounded-full bg-amber-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">warning</span>
              </div>
              <div className="w-[1.5px] bg-gray-200 grow mt-1 min-h-[40px]"></div>
            </div>
            <div className="pb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-amber-500 text-sm">psychology</span>
                    <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">AI Conflict Detection</p>
                  </div>
                  <button className="bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">RESOLVE</button>
                </div>
                <p className="text-sm text-amber-900 font-medium">These events are booked for the same time. Reschedule?</p>
                <div className="space-y-2">
                  <ConflictCard title="TeamLab Borderless" time="4:00 PM - 6:00 PM" imgId="30" />
                  <ConflictCard title="Imperial Palace Tour" time="4:30 PM - 5:30 PM" imgId="31" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 right-4 z-30">
        <button className="flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="text-sm font-bold">Ask AI assistant</span>
        </button>
      </div>
    </div>
  );
};

const TimelineEntry = ({ icon, title, subtitle, status, statusColor, showChevron }: any) => (
  <div className="grid grid-cols-[40px_1fr] gap-x-2">
    <div className="flex flex-col items-center">
      <div className="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
        <span className="material-symbols-outlined text-lg">{icon}</span>
      </div>
      <div className="w-[1.5px] bg-gray-200 grow mt-1 min-h-[40px]"></div>
    </div>
    <div className="pb-6">
      <div className="flex flex-col rounded-xl bg-white border border-gray-100 p-4 shadow-sm relative">
        <div className="flex justify-between items-start mb-1">
          <p className="font-bold text-sm">{title}</p>
          {status && <span className={`text-[10px] font-bold ${statusColor}`}>{status}</span>}
          {showChevron && <span className="material-symbols-outlined text-gray-200 text-lg">chevron_right</span>}
        </div>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

const ConflictCard = ({ title, time, imgId }: any) => (
  <div className="flex items-stretch gap-3 bg-white p-3 rounded-lg shadow-sm border border-amber-100">
    <img src={`https://picsum.photos/id/${imgId}/100/100`} className="w-14 h-14 rounded-md object-cover" />
    <div className="flex flex-col justify-center">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-red-500 font-medium">{time}</p>
    </div>
  </div>
);

export default Itinerary;
