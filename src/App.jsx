import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/views/Home.jsx'
import Register from './components/views/Register.jsx'
import Auth from './components/views/Auth.jsx'
import Team from './components/views/Team.jsx'
import Form from './components/views/Form.jsx'
import Profile from './components/views/Profile.jsx'
import Admin from './components/views/Admin.jsx'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  </Router>
  )
}

export default App