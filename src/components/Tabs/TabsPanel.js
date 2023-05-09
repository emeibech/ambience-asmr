import './TabsPanel.css';
import Tabs from './Tabs';
import wavesBlack from '../../assets/images/svgs/waves-black.svg';
import wavesWhite from '../../assets/images/svgs/waves-white.svg';
import forestBlack from '../../assets/images/svgs/forest-black.svg';
import forestWhite from '../../assets/images/svgs/forest-white.svg';
import cafeBlack from '../../assets/images/svgs/coffee-black.svg';
import cafeWhite from '../../assets/images/svgs/coffee-white.svg';
import gardenBlack from '../../assets/images/svgs/garden-black.svg';
import gardenWhite from '../../assets/images/svgs/garden-white.svg';

const TabsPanel = ({navStatus}) => {

  return (
    <nav className='tabs-panel'>
      <Tabs 
      name="beach" 
      source={[wavesWhite, wavesBlack]} 
      navStatus={navStatus}
      />

      <Tabs 
      name="forest" 
      source={[forestWhite, forestBlack]} 
      navStatus={navStatus}
      />

      <Tabs 
      name="garden" 
      source={[gardenWhite, gardenBlack]} 
      navStatus={navStatus}
      />

      <Tabs 
      name="cafe" 
      source={[cafeWhite, cafeBlack]} 
      navStatus={navStatus}
      />
    </nav>
  );
};

export default TabsPanel;
