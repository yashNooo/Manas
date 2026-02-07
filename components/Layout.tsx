
import React from 'react';
import { AppScreen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeScreen, setScreen }) => {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-background-light shadow-2xl relative flex flex-col">
      <main className="flex-1 pb-24">
        {children}
      </main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
        <NavButton 
          icon="home" 
          label="Home" 
          isActive={activeScreen === 'home'} 
          onClick={() => setScreen('home')} 
        />
        <NavButton 
          icon="explore" 
          label="Explore" 
          isActive={activeScreen === 'itinerary'} 
          onClick={() => setScreen('itinerary')} 
        />
        <NavButton 
          icon="auto_stories" 
          label="Journal" 
          isActive={activeScreen === 'planner'} 
          onClick={() => setScreen('planner')} 
        />
        <NavButton 
          icon="payments" 
          label="Expenses" 
          isActive={activeScreen === 'expenses'} 
          onClick={() => setScreen('expenses')} 
        />
        <NavButton 
          icon="person" 
          label="Profile" 
          isActive={activeScreen === 'profile'} 
          onClick={() => setScreen('profile')} 
        />
      </nav>
    </div>
  );
};

interface NavButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}
  >
    <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>{icon}</span>
    <span className="text-[10px] font-bold">{label}</span>
  </button>
);

export default Layout;
