const TodoList = ({ todos, toggleTodo }) => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </li>
        ))}
      </ul>
    );
  };
  
  export default TodoList;
  