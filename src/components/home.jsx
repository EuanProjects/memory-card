

function Home ({ handleDifficulty }) {

    return (
        <>
            <div><button className="bg-slate-200" onClick={() => handleDifficulty("Easy")}>Easy</button></div>
            <div><button className="bg-slate-200" onClick={() => handleDifficulty("Medium")}>Medium</button></div>
            <div><button className="bg-slate-200" onClick={() => handleDifficulty("Hard")}>Hard</button></div>
        </>
    )
}

export default Home