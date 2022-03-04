import NavItem from "./NavItem.js";
import Navs from "./Navs.js";

const NavList = (active) => {
    return (
        `${Navs.map(nav => { return (NavItem(nav, active)); }).join('')}`
    );
}

export default NavList;