import React from 'react'

const StudentsReviewCard = (props) => {
  return (
    <div className='testimonials-cards'>
    <p className='testimonials-text'>"{props.text}"</p>
    <p className='testimonials-sign'>{props.name}</p>
</div>
  )
}

export default StudentsReviewCard