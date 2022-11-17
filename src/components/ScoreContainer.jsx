import React from 'react'
import ScoreTracker from './ScoreTracker'

function ScoreContainer({ currentScore, highScore }) {
  return (
    <div className='score-container'>
        <ScoreTracker title={'Current Score'} score={currentScore}/>
        <ScoreTracker title={'High Score'} score={highScore}/>
    </div>
  )
}

export default ScoreContainer