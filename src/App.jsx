import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/views/Home.jsx'
import Register from './components/views/Register.jsx'
import Auth from './components/views/Auth.jsx'
import Team from './components/views/Team.jsx'
import Form from './components/views/Form.jsx'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/team" element={<Team/>} />
    </Routes>
  </Router>
  )
}

export default App