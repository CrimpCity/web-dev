import React from "react";
import { Link } from "react-router-dom";
import NavigationSidebar from "./NavigationSideBar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js"
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
        </>

    )
};
export default Tuiter;
