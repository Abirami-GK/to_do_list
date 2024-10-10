import React, { useEffect, useRef, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [todoList,setTodoList] = useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[])
  const inputRef = useRef()

  const add = ()=>{
    const inputText = inputRef.current.value.trim()
    if (inputText === ""){
      return null
    }
    const newTodo = {
      id : Date.now(),
      text : inputText,
      isComplete : false,
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value="";
   }

  const delTodo = (id)=>{
    setTodoList((prev)=>{
      return prev.filter((todo)=>todo.id !== id)
    }) 
   }

  const toggle = (id)=>{
    setTodoList((prev)=>{
      return prev.map((todo)=>{
        if(todo.id === id){
        return {...todo, isComplete: !todo.isComplete}}
        return todo;
      })
    })
   }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
  },[todoList])
  
  const filteredTodoList = todoList.filter((todo) =>
  todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md min-h-[550px] rounded-xl flex flex-col p-7'>
      <div className='flex gap-2 items-center mt-2'>
        <img className='w-8' src='./assets/todo_icon.png' alt=''/>
        <h1 className='text-3xl font-semibold'>To-Do-List</h1>
      </div>

      <div className='flex items-center bg-gray-200 mt-7 rounded-full'>
        <input className='bg-transparent outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type="text" placeholder='Search task' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className='flex items-center bg-gray-200 my-7 rounded-full'>
        <input ref={inputRef} className='bg-transparent outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 ' type="text" placeholder='Add your task'/>
        <button onClick={() => { add();
              inputRef.current.focus(); 
            }}
         className='bg-peach border-none text-lg font-medium rounded-full w-32 h-14 text-white cursor-pointer'>ADD+</button>
      </div>

      <div>
        {filteredTodoList.map((item) => {
          return (<TodoItems key={item.id} text={item.text} isComplete={item.isComplete} delTodo={delTodo} id={item.id} toggle={toggle} />
          );
        })}
      </div>
    </div>   
  )
}

export default Todo
