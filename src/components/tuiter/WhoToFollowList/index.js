import React from "react"
import "../ExploreScreen/explore.css"
import WhoList from "./WhoList.js";


const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who to follow</li>
                <WhoList />
            </ul>
        </>
    );

}
export default WhoToFollowList;