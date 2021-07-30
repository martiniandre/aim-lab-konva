const Score = ({ value, errors, startGame }) => {
    return (
        <section style={{ width: "500px", margin: "auto" }}>
            <span>Hits: {value}</span>
            <span>Errors: {errors} </span>
            <button onClick={startGame}>Play</button>


        </section>
    );
};

export default Score;