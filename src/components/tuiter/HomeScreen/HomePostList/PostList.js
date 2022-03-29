import PostItem from "./PostItem.js";
import { useSelector } from "react-redux";


const PostList = () => {
    const Post = useSelector(state => state.homePosts);
    return (
        <>
            {Post.map((post, index) => { return (PostItem(post, index)); })}
        </>
    );
}

export default PostList;



