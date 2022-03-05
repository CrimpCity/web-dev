import PostList from "./PostList.js";


const HomePostList = () => {

    const formatted = (`
        <div class="mt-2">
            <li class="list-group-item wd-bg-color wd-caption-border-color px-0 pb-0">
                ${PostList()}
            </li>
        </div>`)
    return (formatted);
}

export default HomePostList;

