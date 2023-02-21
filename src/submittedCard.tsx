import PropTypes from 'prop-types'

const SubmittedCard: React.FC<{rate:number}> = ({rate}) =>{

    return(
        
     
      <div className="card">
        <div className="phoneImg">
            <img src="./images/illustration-thank-you.svg" alt="Phone image"/>
        </div>

        <div className="rateGiven">
            You selected {rate} of 5
        </div>

        <h2>Thank you!</h2>
        <span>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
</span>

      </div>
    )

}

export default SubmittedCard;