
import InputField from "./components/ui/custom/InputField"
import TodoDisplay from "./components/ui/custom/TodoDisplay"
import  {Toaster}  from "@/components/ui/sonner"


function App() {
  return (
    <>
      <Toaster richColors />
      <div className="sm: w-[40vw] h-screen mx-auto p-10 ">
        <InputField />
        <TodoDisplay />
      </div>
    </>
    
  )
}

export default App
