import { NAVBAR_TITLE, navOptions } from "../../constants";
import "./Navbar.css";

function NavOption(props) {
  return <p>{props.navItem}</p>;
}

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_left">{NAVBAR_TITLE}</div>

      <div className="navbar_right">
        {navOptions.map(function (item, index) {
          return <NavOption key={item} navItem={item} />;
        })}
      </div>
    </div>
  );
}

export default Navbar;
