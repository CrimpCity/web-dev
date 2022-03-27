const PostItem = (post) => {
    const formatted = (
        <>
            <li className="list-group-item border wd-post-border wd-small-pad">
                <div className="row mt-0">
                    <div className="col-10 mt-1">
                        <p className="m-0 fs-6 wd-post-text-light-color">{post.topic}</p>
                        <p className="m-0 fs-6 fw-bold">{post.userName} <i className="fas fa-check-circle"></i>
                            <span className="fw-lighter wd-post-text-light-color"> - {post.time}</span>
                        </p>
                        <p className="m-0 fs-6 fw-bold">{post.title}</p>
                        <p className="m-0 fs-6">{post.tweets}</p>
                    </div>

                    <div className="col-2 mt-1">
                        <img src={post.image} className="mt-1 img-fluid wd-rounded float-end" width="200px" height="200px">
                        </img>
                    </div>
                </div>
            </li>
        </>
    )

    return formatted
}

export default PostItem;
