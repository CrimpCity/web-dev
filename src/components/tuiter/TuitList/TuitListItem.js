import React from "react";
import './tuits.css';
import TuitStats from "./TuitStats.js";
import { useDispatch } from "react-redux";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        dispatch({ type: 'delete-tuit', tuit })
    }
    return (
        <li className="list-group-item">
            <table>
                <tbody>
                    <tr>
                        <td className="align-text-top">
                            <img className="rounded-circle wd-avatar-image"
                                src={tuit['logoImage']} alt={tuit.userName} />
                        </td>
                        <td className="ps-3" style={{ width: '100%' }}>
                            <i onClick={deleteTweetClickHandler} className="fa fa-remove fa-pull-right"></i>
                            <span className="fw-bold">{tuit.userName}</span>
                            {tuit.verified && <i className="ms-1 fas fa-badge-check"></i>}
                            <span className="ms-1 text-secondary">@{tuit.handle}</span>
                            <div>
                                {tuit.tuitText}
                            </div>
                            {
                                tuit.attachments && tuit.attachments.image &&
                                <img src={tuit.attachments.image}
                                    className="mt-2 wd-border-radius-20px"
                                    style={{ width: "100%" }} alt={tuit.topic} />
                            }
                            {
                                tuit.attachments && tuit.attachments.video &&
                                <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{ width: "100%" }}
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allowFullScreen></iframe>
                            }
                            <TuitStats tuit={tuit} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TuitListItem;