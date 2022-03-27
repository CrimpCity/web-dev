import PostItem from "./PostItem.js";
import Post from "./Post.json";

const PostList = () => {
    return (
        <>
            {Post.map(post => { return (PostItem(post)); })}
        </>
    );
}

export default PostList;
