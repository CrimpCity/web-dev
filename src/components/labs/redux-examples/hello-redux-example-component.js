import React from "react";
import { useSelector } from "react-redux";

// const HelloReduxExampleComponent = () => {
//     // extract 'Hello World' from reducer
//     const message = useSelector((hello) => hello.message);
//     return (
//         <h1>{message}</h1> // render <h1>Hello World</h1>
//     );
// };

// export default HelloReduxExampleComponent;




const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return (
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;


