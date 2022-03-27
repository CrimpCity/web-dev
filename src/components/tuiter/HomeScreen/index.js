import React from "react";
import "./home.css"
import NavigationSidebar from "../NavigationSideBar/index.js";
import HomePostList from "./HomePostList/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js"

const HomeScreen = () => {
    return (
        <>
            <div className="row">
                <div className="container d-flex align-items-start p-4">
                    {/* <!-- SIDE BAR --> */}
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3 p-3">
                        <NavigationSidebar active="explore" />
                    </div>

                    {/* <!-- MAIN CONTENT --> */}
                    <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9 col-9 pt-3">
                        <HomePostList />
                    </div>

                    {/* <!-- WHO TO FOLLOW SIDE BAR  --> */}
                    <div className="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none p-3">
                        <WhoToFollowList />
                    </div>

                    {/* <!-- END OF THREE COLUMN CONTAINER --> */}
                </div>
            </div>
        </>
    );
};
export default HomeScreen;