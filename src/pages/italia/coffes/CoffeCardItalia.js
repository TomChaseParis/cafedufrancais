import React from 'react'

const CoffeCardItalia = ({ img, title, text, coffe, adress, linkUrl }) => {

  const redirectToButton = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className='coffe-card'>
      <img className='img-card' src={img} alt='coffe' />
      <h3>{title}</h3>
      <p className='coffe-text'>{text}</p>
      <p className='coffe-coffe'>{coffe}</p>
      <p className='coffe-adress'>{adress}</p>

      <div onClick={() => {
        redirectToButton(linkUrl)
      }}>

        <div className='coffe-list-button'>
          <button className='coffe-button'>Yelp</button>
        </div>

      </div>
    </div>
  )
}

export default CoffeCardItalia