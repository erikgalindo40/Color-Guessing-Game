import React from 'react'

function AnswerConfirmation({ text, styleColor }) {
  return (
    <div style={{color: styleColor}} className='answer-confirmation'>{text}</div>
  )
}

export default AnswerConfirmation