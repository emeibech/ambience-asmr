import './Navigation.css'
import NavItem from './NavItem';

const Navigation = ({navStatus}) => {
  return (
    <nav className="navigation">
      <ul>
        <NavItem name="beach" navStatus={navStatus} />
        <NavItem name="forest" navStatus={navStatus} />
        <NavItem name="garden" navStatus={navStatus} />
        <NavItem name="cafe" navStatus={navStatus} />
      </ul>
    </nav>
  );
};

export default Navigation;
