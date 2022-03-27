import React from "react";
import './explore.css';
import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    const formatted = (
        <>
            <div className="col-12">
                <form action="#" className="wd-search-icon-align m-0">
                    <i className="fas fa-search wd-form-icon"></i>
                    <input className="wd-form-input wd-search-bar-width wd-rounded-corners-search"
                        placeholder="Search Twitter"></input>
                    <div className="ms-5">
                        <a href="explore-settings.html"><i className="fas fa-cog fa-2x"></i></a>
                    </div>
                </form>
            </div>

            <div className="pt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="_blank">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="_blank">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="_blank">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="_blank">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="_blank">Entertainment</a>
                    </li>
                </ul>
            </div>

            {/* Refactor the large image out so that it can be changed easier  */}
            <div className="position-relative pt-2">
                <img className="img-fluid" src="/tuiter/explore/explore_images/starship.JPG" width="100%" height="100%" alt="SpaceX's Starship" />
                <div
                    className="ms-1 wd-over-img-text-size wd-text-color-search position-absolute bottom-0 start-20 wd-font-weight-over-img">
                    SpaceX's Starship
                </div>
            </div>
            <PostSummaryList />
        </>

    )
    return (formatted);
}

export default ExploreComponent;
