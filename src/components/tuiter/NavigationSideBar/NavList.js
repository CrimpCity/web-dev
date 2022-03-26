import NavItem from "./NavItem.js";
import Navs from "./Navs.json";

// const NavList = (active) => {
//     return (
//         `${Navs.map(nav => { return (NavItem(nav, active)); }).join('')}`
//     );
// }

// export default NavList;

const NavList = (active) => {
    return (
        <>
            {Navs.map(nav => { return (NavItem(nav, active)); })}
        </>
    );
}

export default NavList;
