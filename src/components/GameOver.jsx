export default function GameOver(props) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {props.winner != null ? <p>{props.winner} won!</p> : <p>Its a draw!</p>}
            <p>
                <button onClick={props.onRematch}>Rematch!</button>
            </p>
        </div>
    )
}