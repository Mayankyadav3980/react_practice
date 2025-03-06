import React, {useState} from "react";
import styles from "./about.module.css";

const About = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([])
  const [delTodo, setDelTdo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(ps => [...ps, {id:todos.length+1, value:todo}]);
    setTodo('');
  }

  const toggle = (id)  => {
    const todo = todos.find(obj => obj.id === id);
    setDelTdo(pv=>[...pv, todo]);
    setTodos(ps => ps.filter(todo => todo.id !==id))
    // alert('todoDeleted')
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          placeholder="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className={styles.completedTodos}>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.value}
                <button onClick={() => toggle(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.inCompletedTodos}>
        <ul>
          {delTodo.map((todo, idx) => {
            return <li key={idx}>{todo.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
