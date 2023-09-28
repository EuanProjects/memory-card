function Card({ name, fullPortrait, handleMove, isGameOver }) {
    return (
        <>
            <div className="animate-dropdownin w-48 h-64 min-w-[190px] rounded-lg bg-valorantblack text-white font-mono drop-shadow-lg
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <button className="w-full h-full p-3" onClick={() => handleMove(name)} disabled={isGameOver}>
                    <div className="font-valorant text-2xl"><h2>{name}</h2></div>
                    <div className="bg-valorantred rounded-lg">
                        <img
                            src={fullPortrait}
                            alt={name}
                            style={{ objectFit: 'cover', height: '12rem', width: '16rem'}}
                        />
                    </div>
                </button>
            </div>

        </>
    )
}

export default Card