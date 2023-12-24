import './Choice.css'
import RockIcon from '../assets/icon-rock.svg'
import PaperIcon from '../assets/icon-paper.svg'
import ScissorsIcon from '../assets/icon-scissors.svg'

export default function Game ({ onClick, type, size, winner }) {

    console.log(winner)

    let ChoiceIcon;

    switch (type) {
        case 'rock':
            ChoiceIcon = RockIcon;
            break;
        case 'paper':
            ChoiceIcon = PaperIcon;
            break;
        case 'scissors':
            ChoiceIcon = ScissorsIcon;
            break;
    }
  
    return (
        <div className="choice-scaffold">
            <div className="choice" 
                style={{ width: `${size}px`, height: `${size}px`, backgroundColor: `var(--${type})` }}
                onClick={ onClick ? () => onClick(type) : () => {} }>
                <div className="inner">
                    <img src={ChoiceIcon} />
                </div>

                {winner &&
                <div>
                    <div className="glare1"></div>
                    <div className="glare2"></div>
                    <div className="glare3"></div>
                </div>
                }
            </div>
        </div>
    )
}