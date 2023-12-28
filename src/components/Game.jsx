import './Game.css'
import Choice from './Choice'
import ScoreContext from '../misc/ScoreContext'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

export default function Game () {

    const [ selected, setSelected ] = useState('');
    const [ houseSelected, setHouseSelected ] = useState('');
    const [ win, setWin ] = useState(undefined);
    const { score, setScore } = useContext(ScoreContext);
    let mobile = false;

    if (document.documentElement.clientWidth <= 375)
        mobile = true;

    useEffect(() => {
        if (win == true)
            setScore(score+1);
    }, [win]);

    const choose = (choice) => {
        setSelected(choice);
        setTimeout(() => {
            switch(Math.floor(Math.random() * 3)) {
                case 0:
                    setHouseSelected('rock');
                    setWin(compare(choice, 'rock'));
                    break;
                case 1:
                    setHouseSelected('paper');
                    setWin(compare(choice, 'paper'));
                    break;
                case 2:
                    setHouseSelected('scissors');
                    setWin(compare(choice, 'scissors'));
                    break;
            };
                        
        }, 1000);
        
    }

    const compare = (yourPick, housePick) => {

        if (yourPick == housePick)
            return 'tie';

        let houseStrengh;

        switch (yourPick) {
            case 'rock':
                houseStrengh = (housePick == 'paper') ? 2 : 0;
                break;
            case 'paper':
                houseStrengh = (housePick == 'scissors') ? 2 : 0;
                break;
            case 'scissors':
                houseStrengh = (housePick == 'rock') ? 2 : 0;
                break;
        }

        return (1 > houseStrengh);
    }

    const restart = () => {
        setSelected('');
        setHouseSelected('');
        setWin(undefined);
    }
  
    return (
        <div className="game">
            { selected == "" && <div className="selection-table">
                <Choice onClick={choose} type="rock" size="150" />
                <Choice onClick={choose} type="paper" size="150" />
                <Choice onClick={choose} type="scissors" size="150" />
            </div> }

            { selected != "" && <div className="result-table">
                <div className="your-pick">
                    <h4>YOU PICKED</h4>
                    <Choice type={selected} size="250" winner={win == true ? true : false} />
                </div>

                { win != undefined && <div className="result">
                    <h3>{ win == 'tie' ? 'TIE' : ( win ? 'YOU WIN' : 'YOU LOSE') }</h3>
                    <button onClick={restart} >PLAY AGAIN</button>
                </div> }

                { (win == undefined && mobile) && <div></div> }

                <div className="house-pick">
                    <h4>THE HOUSE PICKED</h4>
                    { houseSelected == '' ?
                        <div className="empty-pick"></div> :
                        <Choice type={houseSelected} size="250" winner={win == false ? true : false} /> 
                    }
                </div>
            </div>}
        </div>
    )
}