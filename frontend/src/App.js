import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
// import Scholorship from './pages/Scholarship';
import Signup from './pages/Signup';
import { Toaster } from 'react-hot-toast';
import Scholarship from './pages/Scholarship';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Courses from './pages/Courses';
import ChatBot from './pages/Chatbot';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate("/expense");

  }, [])
  const [credit, setCredit] = useState(Math.floor(localStorage.getItem("Credit")) || 0);
  localStorage.setItem("Credit", credit);
  return (
    <div className="App">
      <NavBar credit={credit} />
      <ChatBot />
      {/* <Scholarship /> */}
      <div><Toaster></Toaster></div>
      <Routes>
        <Route path='/courses' element={<Courses setCredit={setCredit} credit={credit} />} />
        <Route path='/scholorship' element={<Scholarship />} ></Route>
        <Route path='/' element={<ProtectedRoutes><Home credit={credit} setCredit={setCredit}></Home></ProtectedRoutes>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}


export function ProtectedRoutes(props) {
  if (localStorage.getItem("User")) {
    return props.children;
  }
  else {
    return <Navigate to='/login'></Navigate>
  }
}

export default App;
