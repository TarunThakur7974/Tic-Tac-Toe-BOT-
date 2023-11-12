import React, { useContext, useEffect } from 'react'
import Playground from './Components/Playground'
import GameContext from './GameContext/GameContext'

const App = () => {

  const { one, world, dispatch } = useContext(GameContext);


  return (
    <div>
      <Playground />
    </div>
  )
}

export default App
