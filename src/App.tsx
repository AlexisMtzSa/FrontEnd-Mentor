import { useState } from 'react'
import './App.css'
import RatingCard from './ratingCard'
import SubmittedCard from './submittedCard'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const [rate, setRate] = useState(0)

  const changeRate = (newRate: number) => setRate(newRate)

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<RatingCard changeRate={changeRate}/>}/>
          <Route path='/submited' element={rate!=0?<SubmittedCard rate={rate}/>:<RatingCard changeRate={changeRate}/>}/>
        </Routes>
      </Router>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/AlexisMtzSa" target="_blank">AlexisMtzSa</a>.
      </div>
      
    </div>
    
    
  )
}

export default App
