const NavItem = (nav) => {
    const formatted = (`
        <a 
            href="${nav.link}" class="list-group-item list-group-item-action">
            ${nav.icon}
            <span class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none"> ${nav.title}</span>
        </a>`)

    return formatted

}
export default NavItem;


