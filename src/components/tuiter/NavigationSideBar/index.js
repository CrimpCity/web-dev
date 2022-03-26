import React from "react";
import NavList from "./NavList.js";


const NavigationSidebar = ({ active = 'explore' }) => {
    return (<>
        <div className="list-group align-items-start">
            <a href="tuiter/navigation.html" className="list-group-item list-group-item-action">
                <i className="fab fa-twitter fa-1x fa-fw"></i>
            </a>

            <NavList active={active} />

        </div>
        <div className="d-grid mt-2">
            <a href="tweet.html"
                className="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
    </>
    );
}
export default NavigationSidebar;
