import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardForm from './CardForm'
import Complete from './Complete'

function App() {

  const [sentInfo, setSetInfo] = useState(false)
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const [cardHolderName, setCardHolderName] = useState("Jhon Smith")
  const [cvc, setCVC] = useState("000")
  const [expirationMonth, setExpirationMonth] = useState("00")
  const [expirationYear, setExpirationYear] = useState("00")

  return (
    <div className="App">
        
      <div className='cards'>
        <div className='frontCard'>
          <div className='cardLogo'/>
          <span>{cardNumber}</span>
          <div className='infoCard'>
            <span>{cardHolderName}</span>
            <span>{expirationMonth}/{expirationYear}</span>
          </div>
        </div>
        <div className='backCard'>
          <span>{cvc}</span>
        </div>
      </div>
      

      { !sentInfo && <CardForm setCardHolderName={setCardHolderName} setCardNumber={setCardNumber} 
                        setCVC={setCVC} setExpirationMonth={setExpirationMonth} setExpirationYear={setExpirationYear} setSentInfo={setSetInfo}/> }
      { sentInfo && <Complete/>}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/AlexisMtzSa" target='_blank'>AlexisMtzSa</a>.
      </div>

    </div>
  )
}

export default App
