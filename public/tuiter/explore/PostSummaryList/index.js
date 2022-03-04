import PostList from "./PostList.js";


const PostSummaryList = () => {

    const formatted = (`
        <div class="mt-2">
            <ul class="list-group">
                ${PostList()}
            </ul>
        </div>`)
    return (formatted);
}

export default PostSummaryList;

