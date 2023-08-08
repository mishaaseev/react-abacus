import { useState } from "react";

export default function PlayerName(props){

    const [nameEditable, setNameEditable] = useState(false);

    return(<div className="score mb1">
        
        <div className="score-name">
            {
                nameEditable === true ? <input autoFocus className="score-name-input" type="text" value = {props.name} onChange = {(e) => {props.onChangeName(e.target.value)}} onBlur = {() => setNameEditable(false)}/>
                 : <span className="score-name-text" onClick={() => setNameEditable(true)}>{props.name}</span>
            }
            <br />
         Score: {props.score}
        </div>
        <div className="score-actions"><button onClick={props.onRemovePlayer} className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">X</button></div>
        
        </div>)
}