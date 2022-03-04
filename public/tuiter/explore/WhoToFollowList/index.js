import WhoList from "./WhoList.js";


const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
    <!-- continue here -->
        <li class="list-group-item fw-bold">Who to follow</li>
        ${WhoList()}
    </ul>
    `);

}
export default WhoToFollowList;
