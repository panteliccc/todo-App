import React from 'react'
import '../style.css'
import cross from "../images/icon-cross.svg"
import check from "../images/icon-check.svg"
import { useRef } from 'react'

function Todo({text,deleteTodo,updateTodo,active}){
    const ref = useRef(null);
    const refTodo = useRef(null)
    function onClickCheckBox(){
        updateTodo();
        if(ref.current.id === "trueActive"){
            ref.current.id = "falseActive"
            refTodo.current.id = "falseTodo"
        }
        else {
            ref.current.id = "trueActive"
            refTodo.current.id = "trueTodo"
            
        }
    
    }

    return(
        <li class = "activeTodo element"id={active+"Todo"} ref={refTodo}>
            <div class="sel">
                <div class="check" id={active+"Active"} ref={ref} onClick={onClickCheckBox}>
                    <img src={check} alt="" class="" />
                </div>
                <span>{text}</span>
            </div>
            <img src={cross} alt="" class="del" onClick={deleteTodo}/>
        </li>
    )
}
export default Todo;