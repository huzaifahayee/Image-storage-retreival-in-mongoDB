import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CreatPost from './pages/CreatPost.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatPost />}/>
        <Route path='/about' element={<h1>About us</h1>}/>
      
      </Routes>
    </Router>
  )
}

export default App