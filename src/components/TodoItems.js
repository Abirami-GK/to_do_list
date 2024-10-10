import React from 'react'

const TodoItems = ({text,id,isComplete,delTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer' >
        <img src={isComplete?"./assets/tick.png" : "./assets/not_tick.png"} className='w-7' alt=''/>
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>{delTodo(id)}} src='./assets/delete.png' className='w-3.5 cursor-pointer' alt=''/>
    </div>
  )
}

export default TodoItems
