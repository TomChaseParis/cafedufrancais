import React from 'react'

const CoffeCardItalia = (props) => {
  return (
    <div className='coffe-card'>
    <img className='img-card' src={props.img} alt='coffe' />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <p className='coffe-coffe'>{props.coffe}</p>
    <p className='coffe-adress'>{props.adress}</p>
    <div className='coffe-list-button'>
          <button className='coffe-button'>Yelp</button>
        </div>
    </div>
  )
}

export default CoffeCardItalia