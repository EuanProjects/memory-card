function Start({ setStartGame }) {
    
    function handleClick() {
        setStartGame(true);
    }

    return (
        <>
        <button className="bg-slate-200" onClick={handleClick}>Start Game </button>
        </>
    )
}

export default Start