import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import TaskAdd from './components/TaskAdd'
import TaskEdit from './components/TaskEdit'
import TaskDetail from './components/TaskDetail'

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<TaskList />}></Route>
          <Route path="/taskadd" element={<TaskAdd />}></Route>
          <Route path="/taskedit/:_id" element={<TaskEdit />}></Route>
          <Route path="/taskdetail/:_id" element={<TaskDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
