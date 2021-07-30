const Score = ({ value, errors, startGame, isGameStarted, setDifficulty, difficulty }) => {
    return (
        <section style={{ width: "500px", margin: "auto" }}>
            <span>Hits: {value}</span>
            <span>Errors: {errors} </span>
            <button onClick={startGame}>{isGameStarted ? "Reset" : "Play"}</button>
            <label htmlFor="difficuly">Difficulty</label>
            <select defaultValue="easy" value={difficulty} onChange={({ target }) => setDifficulty(target.value)}>
                <option value="easy">Easy</option>
                <option value="normal">Hormal</option>
                <option value="hard">Hard</option>
            </select>


        </section>
    );
};

export default Score;