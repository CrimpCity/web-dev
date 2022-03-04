import NavList from "./NavList.js";


const NavigationSidebar = (active) => {
    return (`
        <div class="list-group align-items-start">
            <a href="tuiter/navigation.html" class="list-group-item list-group-item-action">
                <i class="fab fa-twitter fa-1x fa-fw"></i>
            </a>

            ${NavList(active)}

        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
    `);
}
export default NavigationSidebar;
