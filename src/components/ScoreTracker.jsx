import React from 'react'

function ScoreTracker({ score, title }) {
  return (
    <div className='score-tracker-container'>
        <div className="score-title">
            {title}
        </div>
        <div className="score-value">
            {score}
        </div>
    </div>
  )
}

export default ScoreTracker