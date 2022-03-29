import WhoListItem from "./WhoListItem.js";
import { useSelector } from "react-redux";


const WhoToFollowList = () => {
    const Who = useSelector(state => state.who);
    return (
        <>
            {
                Who.map((who, index) => { return (WhoListItem(who, index)); })
            }
        </>
    );
}

export default WhoToFollowList;
