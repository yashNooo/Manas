
import React from 'react';

const Expenses: React.FC = () => {
  return (
    <div className="p-0">
      <header className="sticky top-0 z-10 flex items-center bg-background-light/80 backdrop-blur-md p-4 justify-between border-b border-gray-100">
        <div className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </div>
        <h2 className="text-lg font-bold flex-1 text-center">Travel Expenses</h2>
        <div className="flex size-10 items-center justify-end">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6 p-4">
        {/* AI Insight Bubble */}
        <div className="relative overflow-hidden rounded-xl border border-warning/20 bg-warning/5 p-4">
          <div className="flex items-start gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-warning text-white">
              <span className="material-symbols-outlined text-lg fill-icon">auto_awesome</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-amber-600">AI Insight</p>
                <span className="text-[10px] font-medium opacity-50 uppercase tracking-wider">Just Now</span>
              </div>
              <p className="text-sm font-medium leading-relaxed">
                You've spent $50 more than planned on dining, consider a casual meal tonight.
              </p>
            </div>
          </div>
        </div>

        {/* Spending Distribution */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Trip Spending</h3>
            <button className="text-sm font-semibold text-warning">Edit Budget</button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="relative flex items-center justify-center">
              <div className="size-48 rounded-full flex items-center justify-center" style={{ background: 'conic-gradient(#f59e0b 0% 45%, #e5e7eb 45% 75%, #d1d5db 75% 100%)' }}>
                <div className="size-36 rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="text-[10px] font-medium opacity-50 uppercase">Total Spent</span>
                  <span className="text-3xl font-extrabold">$1,240.00</span>
                  <span className="text-[10px] text-success font-bold mt-1 uppercase">OF $2,000 BUDGET</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              <LegendItem color="bg-warning" label="Food" value="$558.00" />
              <LegendItem color="bg-gray-200" label="Transport" value="$372.00" />
              <LegendItem color="bg-gray-400" label="Lodging" value="$310.00" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4 border border-amber-100">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-white">
              <span className="material-symbols-outlined text-warning">group</span>
            </div>
            <div>
              <p className="text-sm font-bold">Split with Friends</p>
              <p className="text-xs opacity-60">Automate shared costs</p>
            </div>
          </div>
          <Toggle checked />
        </div>

        {/* Recent Activity */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <span className="text-xs font-medium opacity-50 uppercase">Today</span>
          </div>
          <div className="space-y-1">
            <TransactionItem icon="restaurant" bg="bg-amber-100" color="text-warning" name="Le Petit Bistrot" detail="Dining • 1:24 PM" amount="-$64.50" />
            <TransactionItem icon="directions_bus" bg="bg-blue-100" color="text-blue-600" name="City Transit" detail="Transport • 10:15 AM" amount="-$4.20" />
            <TransactionItem icon="coffee" bg="bg-orange-100" color="text-orange-600" name="Aura Coffee" detail="Dining • 8:30 AM" amount="-$12.00" />
          </div>
          <span className="text-xs font-medium opacity-50 uppercase mt-2">Yesterday</span>
          <TransactionItem icon="hotel" bg="bg-purple-100" color="text-purple-600" name="Grand Plaza Hotel" detail="Lodging • Sep 14" amount="-$310.00" />
        </div>
      </main>

      <button className="fixed bottom-24 right-6 flex size-14 items-center justify-center rounded-full bg-warning text-white shadow-xl shadow-warning/30 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

const LegendItem = ({ color, label, value }: any) => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`}></span>
      <span className="text-[10px] font-bold">{label}</span>
    </div>
    <p className="text-[10px] opacity-60">{value}</p>
  </div>
);

const TransactionItem = ({ icon, bg, color, name, detail, amount }: any) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
    <div className="flex items-center gap-4">
      <div className={`flex size-11 items-center justify-center rounded-xl ${bg} ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[10px] opacity-60">{detail}</p>
      </div>
    </div>
    <p className="text-sm font-bold text-red-500">{amount}</p>
  </div>
);

const Toggle = ({ checked }: { checked?: boolean }) => (
  <label className="relative flex h-7 w-12 cursor-pointer items-center rounded-full bg-gray-200 p-1 has-[:checked]:bg-warning transition-colors">
    <input checked={checked} readOnly className="sr-only peer" type="checkbox" />
    <div className="h-5 w-5 rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-5"></div>
  </label>
);

export default Expenses;
