import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store"; // adjust path if different
import TodoTile from "./TodoTile";
import { Todo } from "@/interfaces";

const TodoDisplay = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div className="my-10">
      {todos.map((todo: Todo) => (
        <TodoTile todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoDisplay;
