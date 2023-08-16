import { useState } from "react";

export default function PlayerName(props){

    const [nameEditable, setNameEditable] = useState(false);

    console.log("PlayerName", props);

    return(<div className="score mb-1">
        <div className="score-name">
            {
                nameEditable === true ? <input autoFocus className="score-name-input  text-2xl mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value = {props.name} onChange = {(e) => {props.onChangeName(e.target.value)}} onBlur = {() => setNameEditable(false)}/>
                 : <span className="score-name-text text-2xl" onClick={() => setNameEditable(true)}>{props.name}</span>
            }
            
        </div>
        
        <div className="score-actions"><button onClick={props.onRemovePlayer} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">X</button></div>
        
        </div>)
}