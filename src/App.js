import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

// page components
import About from './pages/About'
import Article from './pages/Article'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact /> } /> 
          <Route path="/articles/:id" element={<Article />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
