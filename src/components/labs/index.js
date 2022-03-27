import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index.js";
import TodoList from "./todo/TodoList.js"
// const Labs = () => {
//     return (
//         <>
//             <h1>Labs</h1>
//             <Link to="/hello">
//                 Hello
//             </Link> |
//             <Link to="/tuiter">
//                 Tuiter
//             </Link>
//         </>
//     )
// };

// export default Labs;




const Labs = () => {
    return (
        <div>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link>
            |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            |
            <Link to="/tuiter">
                Tuiter A6
            </Link>
            |
            <Link to="/home">
                Home Screen A6
            </Link>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
        </div>
    )
};
export default Labs;
