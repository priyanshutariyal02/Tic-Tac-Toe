import React, { useState } from 'react'

const Player = ({ initialName, symbol }) => {
    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !isEditing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        //defaultValue: just set an initial value instead of enforcing a value thereafter.
        // value: overwrites any changes we're trying to do.
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

export default Player;