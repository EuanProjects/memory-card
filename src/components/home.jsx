function Home ({ handleDifficulty }) {
    return (
        <>
            <div><button onClick={handleDifficulty("Easy")}>Easy</button></div>
            <div><button onClick={handleDifficulty("Medium")}>Medium</button></div>
            <div><button onClick={handleDifficulty("Hard")}>Hard</button></div>
        </>
    )
}

export default Home