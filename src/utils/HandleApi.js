import axios from "axios"

const basUrl = "https://todoserver-f590.onrender.com"

const getAllToDo = (setTodo)=> {
    axios
    .get(basUrl)
    .then(({data})=>{
        console.log('data ---->',data);
        setTodo(data);
    })
}


const addTodo = (text,setText,setTodo)=> {
    axios
    .post(`${basUrl}/save`,{text})
    .then(({data})=>{
        console.log('data ---->',data);
        setText("")
        getAllToDo(setTodo)
    })
}
const updateToDo = (todoID,text,active,setText,setTodo)=> {
    axios
    .post(`${basUrl}/update`,{_id:todoID,text,active})
    .then(({data})=>{
        console.log('data ---->',data);
        getAllToDo(setTodo)
    })
}

const deleteTodo = (todoID,setTodo)=> {
    axios
    .post(`${basUrl}/delete`,{_id:todoID})
    .then(({data})=>{
        getAllToDo(setTodo)
    })
}
export {getAllToDo,addTodo,deleteTodo,updateToDo};
