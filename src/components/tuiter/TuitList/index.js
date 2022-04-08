import './tuits.css';
import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TuitListItem from "./TuitListItem.js";
import { findAllTuits } from "../../../actions/tuits-actions.js"


const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                        tuit={tuit} />)
            }
        </ul>
    );
}

export default TuitList;