import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
const defaultConfig = {
    theme: "dark",
    lang: "es"
};
function Settings({ toggleDark }) {
    const [config, setConfig] = useLocalStorage("config", defaultConfig);
    
    /**
     * Funcion para intercambiar light <-> dark tanto en la app como en el localStorage
     * @param {*} event - Evento de click proveniente a react 
     */
    const toggleMode = (event) => {
        event.preventDefault();
        setConfig((oldConfig) => (
          {
            ...oldConfig,
            theme: oldConfig.theme === "light" ? "dark" : "light",
          }
          ));
          toggleDark()
    };
    return (
      <div className='text-right'>
      <hr className='my-4' />
        <h1 className='text-3xl text-sky-700 font-semibold mb-4'>APP SETINGS</h1>
        <p className='text-sm mr-2'>
          Actual Theme: 
          <span className='italic ml-1'>
            { config.theme }
          </span>
        </p>
        <button className='btn my-4' type="button" onClick={toggleMode}>Change theme</button>
      </div>
    );
};

export default Settings;
