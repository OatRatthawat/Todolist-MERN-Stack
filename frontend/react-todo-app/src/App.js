import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AddForm from './components/AddForm';
import Item from './components/Item';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import axios from 'axios';
//Add API base
const URL_API = 'http://localhost:3001/todo';

function App() {
  const [tasks, setTasks] = useState([])//For local storage = JSON.parse(localStorage.getItem('tasks')) || []
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // localStorage.setItem('tasks', JSON.stringify(tasks)); //key: 'tasks', value: JSON.stringify(tasks) เปลี่ยนข้อมูลเป็น string 
    // //เพราะ Web storage เก็บข้อมูลเป็น string
    getTasks();
  }, [])
  async function saveTask(e){
    e.preventDefault(); //prevent การ refresh/reload ของ form
    if(!title){
      alert("กรุณาป้อนข้อมูล");
    }
    else if(editId){
      try{
       const response = await axios.put(`${URL_API}/update/${editId}`, {title});
        const updateTask = tasks.map((item) => {
          if(item._id === editId){
            return {...item, title: response.data.title};
          }
          return item;
        })
        setTasks(updateTask);
        setEditId(null);
        setTitle("");
        getTasks();
      }
      catch(error){
        console.error("Error editing tasks", error);
      }
    }
    else{
      try{
        const response = await axios.post(`${URL_API}/new`, {title});
        setTasks([...tasks, response.data]);
        setTitle("");
        getTasks();
      }
      catch(error){
        console.error("Error creating tasks", error);
      }
    }
}
  async function getTasks(){
    try{
      const response = await axios.get(URL_API)
      setTasks(response.data)
    }catch (error){
      console.error("Error fetching data:", error);
    }
  }

  async function deleteTask(_id){
    try{
      await axios.delete(`${URL_API}/delete/${_id}`);
      const result = tasks.filter(item => item._id !== _id);
      setTasks(result);
    }
    catch(error){
      console.error("Error deleting task", error);
    }
  }

  function editTask(_id){
    setEditId(_id);
    const editTask = tasks.find(item => item._id === _id);
    setTitle(editTask.title);
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/todolist' element={
          <>
            <div className="container">
              <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
                <section>
                  {
                    tasks.map((item) => (
                      <Item key={item._id} title={item.title} item={item} deleteTask={deleteTask} editTask={editTask}/>
                    ))
                  }
                </section>
            </div>
          </>
        }/>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
