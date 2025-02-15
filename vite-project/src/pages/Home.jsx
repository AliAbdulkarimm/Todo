import { useContext } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const { todos, addTodo, toggleTodo } = useContext(TodoContext);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {todos.length > 0 && todos.every(todo => todo.completed) && <p>Alla Todos är klara! 🎉</p>}
    </div>
  );
};

export default Home;
