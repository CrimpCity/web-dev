import "../home.css"


const PostItem = (post, index) => {
    const caption = (
        <>
            <div className="border border-1 wd-caption-border mt-2 pt-2 wd-no-margin-pad">
                <div className="position-relative pt-2 border-bottom border-1 wd-caption-border-color">
                    <img className="img-fluid wd-post-text-light-color "
                        src={post.postImage} width="100%" height="100%" alt={post.alt} />
                </div>
                <div className="mt-2 pt-2">
                    <div><p className="mx-2 px-2 fs-6 mb-1">{post.captionTitle}</p></div>
                    <div className="mx-2 px-2 wd-post-text-light-color">{post.captionDescription}</div>
                    <div className="mx-2 px-2 mb-1 pb-1 wd-post-text-light-color"><i className="fas fa-link"></i>{post.postLink}</div>
                </div>
            </div>
        </>

    )

    const noCaption = (
        <>
            <div className="mt-2 pt-2 wd-no-margin-pad">
                <div className="position-relative pt-2 border-1 wd-caption-border-color">
                    <img className="img-fluid wd-post-text-light-color wd-caption-border"
                        src={post.postImage} width="100%" height="100%" alt={post.alt} />
                </div>
            </div>
        </>
    )

    let formatCaption = caption;
    if (post.captionTitle.length + post.captionDescription.length === 0) {
        formatCaption = noCaption;
    }


    const formatted = (
        <div key={index}>
            <div className="row border-bottom border-1 wd-divide-border mt-2">
                <i className="fa-solid fa-ellipsis fa-4x wd-post-text-light-color"></i>
                <div className="col-1 mt-1">
                    <img src={post.userAvatar} className="mt-1 wd-rounded-follow float-start"
                        width="50px" height="50px" alt={post.userName}></img>
                </div>
                <div className="col-11 mt-1 wd-bg-color ms-0 wd-right">
                    <div className="row">
                        <div className="d-flex align-items-start">
                            <div className="w-100 wd-margin-none">
                                <p className="m-0 fs-6 fw-bold">{post.userName} <i className="fas fa-check-circle"></i>
                                    <span className="wd-post-text-light-color">@{post.userHandle} - {post.time}</span>
                                </p>
                            </div>
                            <div className="flex-shrink-1 align-items-start"><span
                                className="wd-post-text-light-color fs-6">...</span>
                            </div>
                        </div>
                        <p className="m-0 fs-6 mb-2">{post.text}</p>

                        {formatCaption}

                        <div className="wd-container-engagement my-2 py-2">
                            <div className="ms-0">
                                <a className="wd-post-text-light-color wd-no-formatting" href="_blank">
                                    <i className="fa fa-comment pe-2"></i> {post.numComments}
                                </a>
                            </div>

                            <div>
                                <a className="wd-post-text-light-color wd-no-formatting" href="_blank">
                                    <i className="fa fa-retweet pe-2"></i> {post.numRetweets}
                                </a>
                            </div>

                            <div>
                                <a className="wd-post-text-light-color wd-no-formatting" href="_blank">
                                    <i className="fa fa-heart pe-2"></i> {post.numLikes}
                                </a>
                            </div>

                            <div>
                                <a className="wd-post-text-light-color wd-no-formatting" href="_blank">
                                    <i className="fa fa-share"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wd-clear"></div>
            </div>
        </div>
    )

    return formatted
}

export default PostItem;
