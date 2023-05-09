import './App.css'
import React, { useState, createContext } from 'react';
import Navigation from './components/Navigation/Navigation';
import TabsPanel from './components/Tabs/TabsPanel';
import PageControl from './components/Pages/PageControl';

export const NavStatusContext = createContext();

const App = () => {
  const [navStatus, setNavStatus] = useState({
    beach: true,
    forest: false,
    garden: false,
    cafe: false,
  });

  return (
    <div className='App'>
      <NavStatusContext.Provider value={setNavStatus}>
        <Navigation navStatus={navStatus} />
      </NavStatusContext.Provider>

      <PageControl navStatus={navStatus} />

      <NavStatusContext.Provider value={setNavStatus}>
        <TabsPanel navStatus={navStatus} />
      </NavStatusContext.Provider>
    </div>
  );
}

export default App;
