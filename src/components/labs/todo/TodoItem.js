// OLD
// const TodoItem = (todo) => {
//     return (`
//         <li>
//             <input type="checkbox"
//                 ${todo.done ? 'checked' : ''}/>
//                 ${todo.title}
//                 (${todo.status})
//         </li>`);
// }
// export default TodoItem;

const TodoItem = ({
    // provide default object so we can test component standalone
    todo = {
        done: true,
        title: 'Buy milk',
        status: 'COMPLETED'
    }
}) => {
    // we don't need ` `
    return (
        // don't need $ use defaultChecked to set initial state don't need $
        <li>
            <input type="checkbox"
                defaultChecked={todo.done} />
            {todo.title}
            ({todo.status})
        </li>

    );  // don't need ` `
}
export default TodoItem;