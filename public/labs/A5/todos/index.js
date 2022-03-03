
import TodoList from "./TodoList.js";


console.log('ToDo Section');
const init = () => {
    console.log('The call is coming from inside of the ToDo Function');
    /* do the rest of the lab work here */
    $('#wd-todo');
}


$(init);



// $('#wd-todo').append(`
//     <div class="container">
//         <h1>Todo example</h1>
//         ${TodoList()}
//     </div>
// `);




$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
