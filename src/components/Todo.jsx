import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import Todoinfo from "./Todoinfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks=[
    {id: 'task-1' , title:'купить молоко' , isDone:false},
    {id: 'task-2' , title:'Погладить кота' , isDone:true},

  ]

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <Todoinfo 
        total={tasks.length}
        done = {tasks.filter(({isDone}) => isDone).length}
      />
      <TodoList tasks={tasks}/>
    </div>
  );
};

export default Todo;
