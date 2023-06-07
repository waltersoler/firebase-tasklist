import React, { useState } from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion';
/**
 * Componente que gestion la lista de tareas
 * @returns 
 */
const TaskList = ({ setShowSettings, showSettings }) => {
    
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([])
  
/**
 * Añade una nueva tarea a la lista de tareas
 */
    const addNewTask = () => {
      if (newTask === "") return;
      setTaskList([...taskList, {task :newTask, completed: false}]);
      setNewTask("")
    }
    /**
     * Funcion para chequear si la lista de tareas esta vacia
     * @returns true -> si la lista esta vacia
     */
    const isEmpyTasklist= () => taskList.length === 0

    /**
     * Editar el nombre de la nueva tarea
     * @param {*} e  - Evento de onChange proveniente de react
     * @returns 
     */
    const editNewItem = (e) => setNewTask(e.target.value)
/**
 * Funcion para eliminar una tarea en concreto
 * @param {*} index - indice de la tarea a eliminar
 */
    const removeItem = (index) =>{
      const newTaskList = taskList.filter((t, i) => i !== index)
      setTaskList(newTaskList)
    }
    /**
     * Funcion para añadir tarea con la tecla ENTER
     * @param {*} e - Evento por defecto que transmite el keyDown de react
     * @returns 
     */
    const insertNewItemEnter = (e) => e.key === 'Enter' && addNewTask()

    const toggleItemCompleted = index => {
      let newTaskList = taskList
      newTaskList[index].completed = !newTaskList[index].completed
      setTaskList([...newTaskList])
    }
    return (
      <>
      <header className='flex justify-between'>
          <h1 className='text-4xl text-sky-700 font-semibold'>Task List</h1>
          <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} className='btn' onClick={()=>setShowSettings(!showSettings)}>{!showSettings ? "Show Setting" : "Hide Settings"}</motion.button>
      </header>
        <div>
          <div className='my-4'>
            <input placeholder="New Task" type="text" value={newTask} onChange={editNewItem} className='shadow py-1 px-2 rounded-lg outline-none p-2 mr-2 transition-all duration-300 focus:ring-2 dark:text-white dark:bg-slate-500' onKeyDown={insertNewItemEnter}/>
            <button className='btn' onClick={addNewTask}>Create Task</button>
          </div>

          {isEmpyTasklist()
              ? (<p>Task list is empty</p>)
              : (
                <ul>
                  {taskList.map((item, index) => (
                    <motion.li initial={{x: "100vw"}} animate={{x:0}} key={index} >
                    <label>
                      <input
                        className='mr-2'
                        type="checkbox"
                        // onClick={()=>removeItem(index)}
                        onClick={()=>toggleItemCompleted(index)}
                        onChange={()=>{}}
                        checked={item.completed}
                      />
                      <span className={`text-gray-800 dark:text-gray-100 ml-2 text-sm italic ${item.completed && "line-through"}`}>
                        { item.task }
                      </span>
                    </label>
                    </motion.li>
                ))}
                </ul>
  )}
        </div>
      </>
    );
};

export default TaskList;
