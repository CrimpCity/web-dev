const PostItem = (post) => {

    const caption = (`
        <div class="border border-1 wd-caption-border mt-2 pt-2 wd-no-margin-pad">
            <div class="position-relative pt-2 border-bottom border-1 wd-caption-border-color">
                <img class="img-fluid wd-post-text-light-color "
                    src="${post.postImage}" width="100%" height="100%" />
            </div>
            <div class="mt-2 pt-2">
                <div><p class="mx-2 px-2 fs-6 mb-1">${post.captionTitle}</p></div>
                <div class="mx-2 px-2 wd-post-text-light-color">${post.captionDescription}</div>
                <div class="mx-2 px-2 mb-1 pb-1 wd-post-text-light-color"><i class="fas fa-link"></i>${post.postLink}</div>
            </div>
        </div>
    `)

    const noCaption = (`
    <div class="mt-2 pt-2 wd-no-margin-pad">
        <div class="position-relative pt-2 border-1 wd-caption-border-color">
            <img class="img-fluid wd-post-text-light-color wd-caption-border"
                src="${post.postImage}" width="100%" height="100%" />
        </div>
    </div>
    `)

    let formatCaption = caption;
    if (post.captionTitle.length + post.captionDescription.length === 0) {
        formatCaption = noCaption;
    }


    const formatted = (`
        <div class="row border-bottom border-1 wd-divide-border mt-2">
            <i class="fa-solid fa-ellipsis fa-4x wd-post-text-light-color"></i>
            <div class="col-1 mt-1">
                <img src="${post.userAvatar}" class="mt-1 wd-rounded-follow float-start"
                    width="50px" height="50px">
            </div>
            <div class="col-11 mt-1 wd-bg-color ms-0 wd-right">
                <div class="row">
                    <div class="d-flex align-items-start">
                        <div class="w-100 wd-margin-none">
                            <p class="m-0 fs-6 fw-bold">${post.userName} <i class="fas fa-check-circle"></i>
                                <span class="wd-post-text-light-color">@${post.userHandle} - ${post.time}</span>
                            </p>
                        </div>
                        <div class="flex-shrink-1 align-items-start"><span
                                class="wd-post-text-light-color fs-6">&#8230</span>
                        </div>
                    </div>
                    <p class="m-0 fs-6 mb-2">${post.text}</p>

                    ${formatCaption}

                    <div class="wd-container-engagement my-2 py-2">
                        <div class="ms-0">
                            <a class="wd-post-text-light-color wd-no-formatting" href="#">
                                <i class="fa fa-comment pe-2"></i> ${post.numComments}
                            </a>
                        </div>

                        <div>
                            <a class="wd-post-text-light-color wd-no-formatting" href="#">
                                <i class="fa fa-retweet pe-2"></i> ${post.numRetweets}
                            </a>
                        </div>

                        <div>
                            <a class="wd-post-text-light-color wd-no-formatting" href="#">
                                <i class="fa fa-heart pe-2"></i> ${post.numLikes}
                            </a>
                        </div>

                        <div>
                            <a class="wd-post-text-light-color wd-no-formatting" href="#">
                                <i class="fa fa-share"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wd-clear"></div>
        </div>
`)

    return formatted
}

export default PostItem;
