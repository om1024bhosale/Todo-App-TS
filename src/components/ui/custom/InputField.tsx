import { FormEvent } from "react"
import { Button } from "../button"
import { Input } from "../input"
import { addTodo } from "../../../../redux/slices/todoSlices"
import { useDispatch} from "react-redux"
import { toast } from "sonner"


const InputField = () => {

  const dispatch = useDispatch();
 

  const addTodoData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = e.currentTarget.todo.value.trim();
    if(todo){

      const id = crypto.randomUUID();
      
      dispatch(addTodo({
        id,
        title:todo,
        completed:false
      }))
      e.currentTarget.reset();
      return;
    }

    toast.error(" Enter valid todo", {
      description: "Todo should not be empty",
      duration: 4000, 
    })
    
  }

  return (
    <form className=" flex flex-1 gap-5 mt-32 " onSubmit={addTodoData} >
      <Input name="todo" placeholder="Enter the todo..."></Input>
      <Button>Add Todo</Button>
    </form>
  )
}

export default InputField