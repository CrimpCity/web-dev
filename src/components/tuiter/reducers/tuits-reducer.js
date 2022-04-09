import { CREATE_TUIT } from "../../../actions/tuits-actions.js";
import { FIND_ALL_TUITS } from "../../../actions/tuits-actions.js";
import { DELETE_TUIT } from "../../../actions/tuits-actions.js";
import { UPDATE_TUIT } from "../../../actions/tuits-actions.js";
// import tuits from "../data/tuits.json";

const tuitsReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_ALL_TUITS:
                return action.tuits;

            case DELETE_TUIT:
                return state.filter(tuit => tuit._id !== action.tuit._id);

            case CREATE_TUIT:
                return [...state, action.newTuit];

            case UPDATE_TUIT:
                return state.map(
                    tuit => tuit._id === action.tuit._id ? action.tuit : tuit);

            default:
                return state;
        }
    };

export default tuitsReducer;