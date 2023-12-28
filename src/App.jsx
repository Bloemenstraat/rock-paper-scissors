import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Game from './components/Game'
import ScoreContext from './misc/ScoreContext'
import RulesImage from './assets/image-rules.svg'
import IconClose from './assets/icon-close.svg'

function App() {

    const [ score, setScore ] = useState(0);
    const [ displayModal, setDisplayModal ] = useState(false);

    return (
        <>
            <ScoreContext.Provider value={{ score, setScore }}>
                <Scoreboard />
                <Game />
            </ScoreContext.Provider>

            <button className='rules-button' onClick={() => setDisplayModal(!displayModal)}>RULES</button>

            {displayModal && <div className="modal-background">
                <div className="modal">
                    
                    <h5>RULES</h5>
                
                    <img className='rulebook' src={RulesImage} />

                    <img className="x" src={IconClose} onClick={() => setDisplayModal(!displayModal)} />
                </div>

            </div>}
        </>
    )
}

export default App
