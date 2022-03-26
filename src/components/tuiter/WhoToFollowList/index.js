import React from "react";
import WhoList from "./WhoList.js";

// OLD JSX implementation
// const WhoToFollowList = () => {
//     return (`
//     <ul className="list-group">
//     <!-- continue here -->
//         <li className="list-group-item fw-bold">Who to follow</li>
//         ${WhoList()}
//     </ul>
//     `);

// }
// export default WhoToFollowList;



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