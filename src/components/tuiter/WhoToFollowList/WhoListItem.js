const WhoListItem = (who) => {
    const formatted = (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 mt-1">
                        <img src={who.avatarIcon} className="mt-1 wd-rounded-follow float-start" width="50px"
                            height="50px" alt={who.alt}></img>
                    </div>
                    <div className="col-7 mt-1">
                        <p className="m-0 ms-4 fs-6 fw-bold">{who.userName} <i className="fas fa-check-circle"></i></p>
                        <p className="m-0 ms-4 fs-6">@{who.handle}</p>
                    </div>
                    <div className="col-3 mt-1">
                        <button className="btn btn-primary wd-follow-button fw-bold wd-margin-top float-end">Follow</button>
                    </div>
                    <div className="wd-clear"></div>
                </div>
            </li>
        </>
    )

    return formatted
}

export default WhoListItem;