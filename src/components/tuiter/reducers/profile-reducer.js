import profileJson from '../data/profile.json';

const profileReducer = (state = profileJson, action) => {
    switch (action.type) {
        case "save-profile-edit":
            return action.profile;
        case "exit-profile-edit":
            return state;
        default:
            return state
    }
};

export default profileReducer;