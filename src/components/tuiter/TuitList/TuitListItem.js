import React from "react";
import './tuits.css';
import "../HomeScreen/home.css"
import TuitStats from "./TuitStats.js";
import { useDispatch } from "react-redux";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = () => { dispatch({ type: 'delete-tuit', tuit }) }

    let content = "";
    if (typeof tuit.attachments === "undefined") {
        content = "";
    } else {
        if (tuit.attachments && tuit.attachments.image) {
            const image = (
                <img src={tuit.attachments.image}
                    className="mt-2 wd-border-radius-20px"
                    style={{ width: "100%" }} alt={tuit.topic} />
            )
            content = image;
        }
        if (tuit.attachments && tuit.attachments.video) {
            const video = (
                <iframe width="100%" height="350px"
                    className="mt-2 wd-border-radius-20px"
                    style={{ width: "100%" }}
                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                    title="YouTube video player" frameBorder="0"
                    allowFullScreen></iframe>
            )
            content = video;
        }
    }

    const formatted = (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 wd-no-pad-left">
                    <img className="rounded-circle wd-avatar-image"
                        src={tuit['logoImage']} alt={tuit.userName} />
                </div>
                <div className="col-11 wd-add-padding-avatar">
                    <div>
                        <div className="d-flex bd-highlight mb-3">
                            <div className="bd-highlight">
                                <span className="m-0 fs-6 fw-bold">{tuit.postedBy.username} </span></div>
                            <div className="bd-highlight">
                                <span className="pl-1 wd-post-text-light-color">@{tuit.handle}</span></div>
                            <div className="ms-auto bd-highlight">

                                <i onClick={() => deleteTuit(tuit)}
                                    className="fas fa-trash"></i>

                            </div>

                        </div>
                        <p className="m-0">{tuit.tuitText}</p>
                    </div>
                    {content}
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </li>
    )

    return (formatted);
};

export default TuitListItem;