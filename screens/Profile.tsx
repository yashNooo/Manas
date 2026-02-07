
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="p-0">
      <header className="sticky top-0 z-50 flex items-center bg-background-light/80 backdrop-blur-md p-4 justify-between">
        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center">Traveler Profile</h2>
        <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm cursor-pointer">
          <span className="material-symbols-outlined">settings</span>
        </div>
      </header>

      <div className="flex flex-col items-center py-8 px-4">
        <div className="relative">
          <div className="size-32 rounded-full p-1 bg-gradient-to-tr from-green-400 to-green-100">
            <div 
              className="size-full rounded-full border-4 border-white bg-center bg-cover" 
              style={{ backgroundImage: `url("https://picsum.photos/id/177/300/300")` }}
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border-2 border-white">
            GOLD
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Alex Johnson</h1>
          <p className="text-gray-400 text-sm font-medium mt-1 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-base text-green-500 fill-icon">verified</span>
            Verified Member since 2022
          </p>
        </div>
      </div>

      <div className="px-4 space-y-8">
        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-1">Travel Preferences</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-50">
            <PreferenceItem icon="rocket_launch" label="Mood" desc="Current travel vibe" value="Adventurous" />
            <PreferenceItem icon="speed" label="Pace" desc="Daily activity level" value="Balanced" />
            <PreferenceItem icon="payments" label="Budget" desc="Spending style" value="Mid-range" />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-3 px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Document Vault</h3>
            <span className="text-[10px] font-bold text-green-500 cursor-pointer">Add New</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            <DocCard icon="menu_book" title="Passport" subtitle="Expires 2028" />
            <DocCard icon="vaccines" title="Health Pass" subtitle="Verified" />
            <DocCard icon="card_membership" title="Insurance" subtitle="Annual Multi" />
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-1">AI Personalization</h3>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-green-50 text-green-500">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-sm font-semibold">Smart Learning</p>
                <p className="text-[10px] text-gray-400">AI adapts to your trip history</p>
              </div>
              <Toggle checked />
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-green-100 flex gap-2">
              <span className="material-symbols-outlined text-green-500 text-sm">info</span>
              <p className="text-[10px] leading-relaxed text-gray-600">
                Your AI has analyzed 12 past trips to optimize your recommendations. Personalization is currently at 84%.
              </p>
            </div>
          </div>
        </section>

        <div className="pb-8">
          <button className="w-full h-14 bg-white text-red-500 font-bold rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
          <p className="text-center text-gray-300 text-[10px] mt-4 uppercase tracking-[2px]">App Version 2.4.1</p>
        </div>
      </div>
    </div>
  );
};

const PreferenceItem = ({ icon, label, desc, value }: any) => (
  <div className="flex items-center gap-4 px-4 py-4 active:bg-gray-50 cursor-pointer">
    <div className="flex size-10 items-center justify-center rounded-lg bg-green-50 text-green-500">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex flex-col flex-1">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-[10px] text-gray-400">{desc}</p>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{value}</span>
      <span className="material-symbols-outlined text-gray-300 text-lg">chevron_right</span>
    </div>
  </div>
);

const DocCard = ({ icon, title, subtitle }: any) => (
  <div className="flex flex-col items-center justify-center min-w-[110px] aspect-square bg-white rounded-xl shadow-sm border border-gray-100">
    <span className="material-symbols-outlined text-green-500 text-3xl mb-2">{icon}</span>
    <p className="text-[11px] font-bold">{title}</p>
    <p className="text-[9px] text-gray-400">{subtitle}</p>
  </div>
);

const Toggle = ({ checked }: { checked?: boolean }) => (
  <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-200 p-1 has-[:checked]:bg-green-500 transition-colors">
    <input checked={checked} readOnly className="sr-only peer" type="checkbox" />
    <div className="h-4 w-4 rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-5"></div>
  </label>
);

export default Profile;
