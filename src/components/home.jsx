

function Home({ handleDifficulty }) {

    return (
        <>

            <div className="grid place-items-center w-screen h-screen">
                <div>
                    <div className="flex justify-center items-center w-full xs:24 md:h-48 lg:h-96">
                        <div className="xs:w-24 xs:h-24 md:w-48 md:h-48 lg:w-96 lg:h-96 bg-valorantblack rounded-lg border-8 border-valorantred mb-5 drop-shadow-lg"><img src="/valorant_logo.png" alt="My Image" /></div>
                    </div>
                    <div className="bg-valorantblack rounded-lg border-4 border-valorantred my-5 drop-shadow-lg">
                        <h2 className="font-valorant text-valorantred xs:text-4xl md:text-6xl lg:text-8xl">Memory Game</h2>
                    </div>
                    <div className="flex gap-5 justify-center my-5">
                        <div><button className="bg-valorantblack text-valorantred rounded-lg w-24 font-valorant border-4 border-valorantred 
                    drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => handleDifficulty("Easy")}>Easy</button></div>
                        <div><button className="bg-valorantblack text-valorantred rounded-lg w-24 font-valorant border-4 border-valorantred 
                    drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => handleDifficulty("Medium")}>Medium</button></div>
                        <div><button className="bg-valorantblack text-valorantred rounded-lg w-24 font-valorant border-4 border-valorantred 
                    drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => handleDifficulty("Hard")}>Hard</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home