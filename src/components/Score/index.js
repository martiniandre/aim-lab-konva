import './styles.css'

const Score = ({ value, errors, startGame, isGameStarted, setDifficulty, difficulty }) => {
    return (
        <section className="scoreBoard">
            <div>
            <span className="errors">Errors: {errors} </span>
            <span className="score">Hits: {value}</span>
            <button onClick={startGame}>{isGameStarted ? "Reset" : "Play"}</button>
            </div>
        </section>
    );
};

export default Score;