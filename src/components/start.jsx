function Start({ setStartGame }) {


    function handleClick() {
        setStartGame(true);
    }

    return (
        <>
        <div className="grid place-items-center w-screen h-screen">
            <div>
                <div className="flex justify-center w-full h-96">
                    <div className="w-96 h-96 bg-valorantblack rounded-lg border-8 border-valorantred mb-5 drop-shadow-lg"><img src="/valorant_logo.png" alt="My Image" /></div>
                </div>
                <div className="bg-valorantblack rounded-lg border-4 border-valorantred my-5 drop-shadow-lg">
                    <h2 className="font-valorant text-valorantred text-8xl">Memory Game</h2>
                </div>
                <div className="flex justify-center my-5">
                    <button className="bg-valorantblack text-valorantred rounded-lg w-24 font-valorant border-4 border-valorantred 
                    drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={handleClick}>Start Game </button>
                </div>
            </div>
        </div>
        </>
    )
}

    export default Start