import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
const fetch = async () =>{
  const response = await axios.get('https://randomuser.me/api')
  const {name:Name, email:Email} = response.data.results[0]
  const fullName = `${Name.first} ${Name.last}`
  setUserData({name:fullName, email:Email})
  localStorage.setItem('User', JSON.stringify({name:fullName, email:Email}));
}
useEffect(()=>{
  fetch()
},[])
const userDetails = JSON.parse(localStorage.getItem("User") || "")
  return (
    <div className="App">
      <h1>Name : {userDetails?.name}</h1>
      <h1>Email : {userDetails?.email}</h1>
      <button onClick={()=>fetch()}>Refresh</button>
    </div>
  );
}

export default App;
