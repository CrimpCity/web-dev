const PostItem = (post) => {
    const formatted = (`
    <li class="list-group-item border wd-post-border wd-small-pad">
        <div class="row mt-0">


            <div class="col-10 mt-1">
                <p class="m-0 fs-6 wd-post-text-light-color">${post.topic}</p>
                <p class="m-0 fs-6 fw-bold">${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="fw-lighter wd-post-text-light-color"> - ${post.time}</span>
                </p>
                <p class="m-0 fs-6 fw-bold">${post.title}</p>
                <p class="m-0 fs-6">${post.tweets}</p>
            </div>

            <div class="col-2 mt-1">
                <img src="${post.image}" class="mt-1 img-fluid wd-rounded float-end" width="200px" height="200px">
            </div>


        </div>
    </li>        
`)

    return formatted
}

export default PostItem;
