import './TabsPanel.css'
import Tabs from './Tabs';
import wavesBlack from '../../assets/images/svgs/waves-black.svg';
import wavesWhite from '../../assets/images/svgs/waves-white.svg';
import forestBlack from '../../assets/images/svgs/forest-black.svg';
import forestWhite from '../../assets/images/svgs/forest-white.svg';
import coffeeBlack from '../../assets/images/svgs/coffee-black.svg';
import coffeeWhite from '../../assets/images/svgs/coffee-white.svg';
import bambooBlack from '../../assets/images/svgs/bamboo-black.svg';
import bambooWhite from '../../assets/images/svgs/bamboo-white.svg';

const TabsPanel = () => {

  return (
    <nav className='tabs-panel'>
      <Tabs name="Beach" source={[wavesBlack, wavesWhite]} />
      <Tabs name="Forest" source={[forestBlack, forestWhite]} />
      <Tabs name="Cafe" source={[coffeeBlack, coffeeWhite]} />
      <Tabs name="Japanese Garden" source={[bambooBlack, bambooWhite]} />
    </nav>
  );
};

export default TabsPanel;
