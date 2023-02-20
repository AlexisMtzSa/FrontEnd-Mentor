import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

const RatingCard = ({changeRate}) =>{

    let rate: number = 0

    const navigate = useNavigate()

    function assignNewRate(newRate: number){
      rate = newRate
    }

    return(
      <div className="card">

        <div className='starImg'>
          <img src='./images/icon-star.svg' alt='Star' id='star'/>
        </div>
        
      
        <h2 className="h2RatingCard">How did we do?</h2>

        <p>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>

        <div className='ratingButtons'>
          <button className='ratingButton' onClick={() => assignNewRate(1)}>1</button>
          <button className='ratingButton' onClick={() => assignNewRate(2)}>2</button>
          <button className='ratingButton' onClick={() => assignNewRate(3)}>3</button>
          <button className='ratingButton' onClick={() => assignNewRate(4)}>4</button>
          <button className='ratingButton' onClick={() => assignNewRate(5)}>5</button>
        </div>

        <button className='submitButton' onClick={()=> {
          
          changeRate(rate)
          rate!=0?navigate('/submited'):navigate('/')

          }}>
          SUBMIT
        </button>
        
      </div>
    )

}

RatingCard.prototypes = {
  changeRate: PropTypes.func.isRequired
}

export default RatingCard;