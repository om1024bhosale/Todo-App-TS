import { Delete, Pencil, Save } from "lucide-react"
import { Checkbox } from "../checkbox"
import { Todo } from "@/interfaces"
import { deleteTodo, completeTodo, updateTodo } from "../../../../redux/slices/todoSlices"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { useState } from "react"


const TodoTile = ({todo} : {todo: Todo}) => {

  const[editable, setEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const dispatch = useDispatch();

  const markTodosComplete = ({id}: {id:string}) => {
    if(todo.completed) return;
    dispatch(completeTodo(id))
    toast.success("Todo is completed")

  }

  const editTodo = ({id}:{id:string}) => {
    if(title.trim()!== "") {
      dispatch(updateTodo({
        id,
        title,
        completed: todo.completed
      }))
      setEditable(!editable)
      return;
    }
    toast.error("Todo cannot be empty")
  }
  return (
    <div className="flex border-b-2 justify-between p-2">
      <div className="flex items-center gap-2">
      <Checkbox onClick={()=> markTodosComplete({id : todo.id})}  checked={todo.completed && true } />
      <h3 className={`font-semibold capitalize ${todo.completed && "line-through"} ${editable && "font-light"} outline-none`} contentEditable ={editable} 
      onInput={(e) => setTitle(e.currentTarget.innerText)} >
        {todo.title}
      </h3>
      </div>
      {
        !todo.completed && (editable ? <Save size = {20} cursor = "pointer" onClick = {() =>editTodo({id:todo.id})} /> 
        :       <div className="flex gap-2 items-center">
        <Pencil size={20} cursor="pointer" onClick={()=> setEditable(!editable)} />
        <Delete size={20} cursor="pointer" onClick={() => dispatch(deleteTodo(todo.id))} />
      </div> )
      }
     
    </div>
  )
}

export default TodoTile