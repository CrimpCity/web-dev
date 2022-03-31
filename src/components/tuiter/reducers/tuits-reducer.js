import tuits from "../data/tuits.json";



const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'like-tuit':
                return state.map(tuit => {
                    if (tuit._id === action.tuit._id) {
                        if (tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                });

            case 'delete-tuit':
                return state.filter(tuit => tuit._id !== action.tuit._id);

            case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    topic: "Web Development",
                    postedBy: {
                        username: "ReactJS"
                    },
                    liked: true,
                    verified: false,
                    handle: "ReactJS",
                    time: "2h",
                    title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                    tuitText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    attachments: {
                        video: "unKvMC3Y1kI"
                    },
                    logoImage: "../../../images/react-blue.png",
                    avatarImage: "../../../images/react-blue.png",
                    stats: {
                        comments: 123,
                        retuits: 234,
                        likes: 345
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];

            default:
                return tuits
        }
    };

export default tuitsReducer;
















