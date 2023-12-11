import { useEffect, useState } from 'react';
import './App.css';
import Userlist from './components/Userlist';
import axios from 'axios';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import Newuser from './components/Newuser';
import Edituser from './components/Edituser';

function App() {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);  
        setUsers(response.data);
      }catch(err){
        console.log(`Error fetching data:${err}`)
      }
    }

    fetchData();

  },[]);

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Userlist users={users} setUsers={setUsers}/>}/>
        <Route path='/newuser' element={<Newuser users={users} setUsers={setUsers}/>} />
        <Route path='/edituser/:id' element={<Edituser users={users} setUsers={setUsers}/>} />
      </Routes>
    </div>
  );
}

export default App;
