const NavItem = (nav, active) => {
    let isActive = "";
    if (active === nav.title) {
        isActive = "active";
    }

    const formatted = (
        <a
            href={nav.link} className={`list-group-item list-group-item-action ${isActive}`}>
            <i className={nav.icon}></i>
            <span className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none"> {nav.title}</span>
        </a>)

    return (formatted)
}
export default NavItem;

