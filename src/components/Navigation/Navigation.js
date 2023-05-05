import './Navigation.css'
import React, { useState } from 'react';
import NavItem from './NavItem';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('beach');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navigation">
      <ul>
        <NavItem
          name="beach"
          isActive={activeTab === 'beach'}
          onClick={() => handleTabClick('beach')}
        />
        <NavItem
          name="forest"
          isActive={activeTab === 'forest'}
          onClick={() => handleTabClick('forest')}
        />
        <NavItem
          name="garden"
          isActive={activeTab === 'garden'}
          onClick={() => handleTabClick('garden')}
        />
        <NavItem
          name="cafe"
          isActive={activeTab === 'cafe'}
          onClick={() => handleTabClick('cafe')}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
