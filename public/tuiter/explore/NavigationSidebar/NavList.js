import NavItem from "./NavItem.js";
import Navs from "./Navs.js";

const NavList = () => {
    return (
        `${Navs.map(nav => { return (NavItem(nav)); }).join('')}`
    );
}

export default NavList;