import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CreatPost from './pages/CreatPost.jsx'
import Feed from './pages/Feed.jsx' 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatPost />}/>
        <Route path='/feed' element={<Feed />}/>
      
      </Routes>
    </Router>
  )
}

export default App