import React, { useEffect, useState } from 'react';
import TaskList from './lists/TaskList';
import Settings from './settings/Settings';
import { motion, AnimatePresence } from 'framer-motion';
/**
 * Funcion anonima para crear un componente principal
 * @returns {React.Component}Componente principal de nuestra aplicacion
 */
const App = () => {
  // const config = JSON.parse(localStorage.getItem("config"))

  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  /**
   * Documentacion del useEffect
   * Se crea una variable de estado donde se alamcena el valor de la configuracion del localStorage
   */
  useEffect(() => {
    // const config = JSON.parse(localStorage.getItem("config"))
    // setDark(config.theme)
    setDark(false)
   
  }, []);
/**
 * Funcion para intercambiar la variable de estado light - dark
 */
  const toggleDark= () =>{
    setDark(!dark)
  }
    return (
      <div className={`${dark ? "dark" : ""}`}>
        <div className={`h-screen p-4 flex flex-col App ${dark ? "dark" : ""}bg-gray-100 dark:bg-slate-700 dark:text-white`}>
          <TaskList setShowSettings={setShowSettings} showSettings={showSettings}/>
          <AnimatePresence initial={false} mode='popLayout' onExitComplete={()=>null}>
            {showSettings && <motion.div initial={{y:'100vh'}} animate={{y:"0"}} exit={{y:"100vh"}}><Settings  toggleDark={toggleDark}/></motion.div>}
          </AnimatePresence>


          {/* {showSettings && <motion.div initial={{y:'100vh'}} animate={{y:"0"}} exit={{y:"100vh"}}><Settings  toggleDark={toggleDark}/></motion.div>} */}
        </div>
      </div>
    );
};

export default App;
