import './App.css'
import Navigation from './components/Navigation/Navigation';
import TabsPanel from './components/Tabs/TabsPanel';
import Beach from './components/Pages/Beach'

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Beach />
      <TabsPanel />
    </div>
  );
}

export default App;
