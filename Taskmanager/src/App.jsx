import { useState } from 'react'
import Login from './Login'
import Taskmanager from './Taskmanager'
import "./Login.css";
import "./Taskmanager.css";

  function App(){
    return<div>
      <Login />
      <Taskmanager />
    </div>
  }

export default App;