import { useContext } from 'react'
import ScoreContext from '../misc/ScoreContext'
import './Scoreboard.css'

export default function Scoreboard () {

    const { score } = useContext(ScoreContext);

    return (
        <header>
        <div className="scoreboard">
            <div className="game-title">
                <h3>ROCK</h3>
                <h3>PAPER</h3>
                <h3>SCISSORS</h3>
            </div>

            <div className="score">
                <h5>Score</h5>
                <h2>{score}</h2>
            </div>
        </div>
        </header>
    )
}