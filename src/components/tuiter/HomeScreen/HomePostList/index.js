import PostList from "./PostList.js";


const HomePostList = () => {

    const formatted = (
        <>
            <div className="mt-2">
                <li className="list-group-item wd-bg-color wd-caption-border-color px-0 pb-0">
                    <PostList />
                </li>
            </div>
        </>

    )
    return (formatted);
}

export default HomePostList;

