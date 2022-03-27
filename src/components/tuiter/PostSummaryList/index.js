import React from "react";
import "../ExploreScreen/explore.css"
import PostList from "./PostList.js";


const PostSummaryList = () => {
    const formatted = (
        <>
            <div className="mt-2">
                <ul className="list-group">
                    <PostList />
                </ul>
            </div>
        </>
    )

    return (formatted);
}

export default PostSummaryList;

