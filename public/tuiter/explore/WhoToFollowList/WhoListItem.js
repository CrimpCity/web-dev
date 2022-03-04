const WhoListItem = (who) => {
    const formatted = (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2 mt-1">
                <img src="${who.avatarIcon}" class="mt-1 wd-rounded-follow float-start" width="50px"
                    height="50px">
            </div>
            <div class="col-7 mt-1">
                <p class="m-0 ms-4 fs-6 fw-bold">${who.userName} <i class="fas fa-check-circle"></i></p>
                <p class="m-0 ms-4 fs-6">@${who.handle}</p>
            </div>
            <div class="col-3 mt-1">
                <button class="btn btn-primary wd-follow-button fw-bold wd-margin-top float-end">Follow</button>
            </div>
            <div class="wd-clear"></div>
        </div>
    </li>
`)

    return formatted
}

export default WhoListItem;
