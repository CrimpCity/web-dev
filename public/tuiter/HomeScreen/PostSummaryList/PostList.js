import PostItem from "./PostItem.js";
import Post from "./Post.js";

const PostList = () => {
    return (
        `${Post.map(post => { return (PostItem(post)); }).join('')}`
    );
}

export default PostList;
