import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSideBar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js"
import PostSummaryList from "./PostSummaryList/index.js"

// const Tuiter = () => {
//     return (
//         <>
//             <h1>Tuiter</h1>
//             <Link to="/hello">
//                 Hello
//             </Link> |
//             <Link to="/">
//                 Labs
//             </Link>
//         </>
//     )
// };

// export default Tuiter;


const Tuiter = () => {
    return (
        <>
            <NavigationSidebar active="home" />
            <WhoToFollowList />
            <PostSummaryList />
        </>

    )
};
export default Tuiter;
