import './style.css';
import sun from './images/icon-sun.svg'
import Todo from './components/todo';
import { useEffect, useState } from 'react';
import { getAllToDo,addTodo, deleteTodo ,updateToDo} from './utils/HandleApi';

function App() {
  const [toDo,setTodo] = useState([])
  const[text,setText] = useState("")
  useEffect(()=>{
    getAllToDo(setTodo);
  },[])
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo(text,setText,setTodo)
    }
  };
  const [theme,setTheme] =  useState("dark")
  const toggleTheme = ()=>{
    if(theme==="light") {
      setTheme("dark")
      document.querySelector(".header").classList.add('dark-theme')
      document.querySelector(".header").classList.remove('light-theme')
    }
    else {
      setTheme("light")
      document.querySelector(".header").classList.add('light-theme')
      document.querySelector(".header").classList.remove('dark-theme')

    }
  }
  useEffect(()=>{
    document.body.className = theme;

  },[theme])
  return (
    <div className="App">
      <div class="header">
        <div class="content">
          <h1>Todo</h1>
          <img src={sun} alt="" class="theme" onClick={toggleTheme}/>
        </div>
      <div class="new-todo">
        <div class="border"></div>
        <input type="text" placeholder="Create a new todo..." 
        value={text} 
        onChange={(e)=>setText(e.target.value)}
        onKeyDown={handleKeyDown}/>
      </div>
    </div>

    <div class="todo">
      <ul class="list">
        {toDo.map((item)=> 
        <Todo 
          key = {item._id} 
          text={item.text}
          active={item.active}
          deleteTodo ={() => deleteTodo(item._id,setTodo)}
          updateTodo = {()=>{
            if(!item.active){
              item.active = true;
            }
            else{

              item.active = false;
            }
            updateToDo(item._id,item.text,item.active)
          }}/>)}
      </ul>
      <div class="navigation">
        <p>
          <span class="number">{toDo.length} </span>
          items left
        </p>
        <ul>
          <li class="btt active all-todo">All</li>
          <li class="btt active-todo">Active</li>
          <li class="btt complete-todo">Completed</li>
        </ul>
        <p class="clear">Clear Completed</p>
      </div>
    </div>
    </div>
  );
}

export default App;
