import Who from "./Who.js";
import WhoListItem from "./WhoListItem.js";


const WhoToFollowList = () => {
    return (
        `${Who.map(who => { return (WhoListItem(who)); }).join('')}`
    );
}

export default WhoToFollowList;
