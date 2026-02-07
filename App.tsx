
import React, { useState } from 'react';
import { AppScreen } from './types';
import Layout from './components/Layout';
import Dashboard from './screens/Dashboard';
import Itinerary from './screens/Itinerary';
import Expenses from './screens/Expenses';
import Profile from './screens/Profile';
import AIPlanner from './screens/AIPlanner';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<AppScreen>('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <Dashboard />;
      case 'itinerary': return <Itinerary />;
      case 'expenses': return <Expenses />;
      case 'profile': return <Profile />;
      case 'planner': return <AIPlanner />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout activeScreen={activeScreen} setScreen={setActiveScreen}>
      {renderScreen()}
    </Layout>
  );
};

export default App;
