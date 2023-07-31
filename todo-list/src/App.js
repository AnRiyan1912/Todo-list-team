import "./App.css";
import Todo from "./pages/todo";
import Login from "./pages/login";
import {Route, Routes} from 'react-router-dom'
import Register from "./pages/Register";

function App() {
  return (
    <>

    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='/dashboard' element={<Todo />} /> 
    </Routes>
     
    </>
    

  ) ;
}

export default App;
