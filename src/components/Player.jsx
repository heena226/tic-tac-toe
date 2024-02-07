import {useState, React} from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        console.log("Button is clicked!");
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {isEditing ? 
                    <input type='text' value={playerName} onChange={handleChange} required />
                :
                    <span className="player-name">{playerName}</span>
                }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}