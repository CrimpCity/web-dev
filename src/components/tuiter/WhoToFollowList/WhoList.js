import Who from "./Who.json";
import WhoListItem from "./WhoListItem.js";

// OLD JSX implementation
// const WhoToFollowList = () => {
//     return (
//         `${Who.map(who => { return (WhoListItem(who)); }).join('')}`
//     );
// }

// export default WhoToFollowList;




const WhoToFollowList = () => {
    return (
        <>
            {
                Who.map(
                    who => { return (WhoListItem(who)); }
                )
            }
        </>
    );
}

export default WhoToFollowList;