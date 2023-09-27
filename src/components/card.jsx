function Card({ name, fullPortrait, handleMove, isGameOver }) {
    return (
        <>
            <div className="w-48 h-64 min-w-[190px] rounded-lg bg-valorantblack text-white font-mono">
                <button className="w-full h-full p-3" onClick={() => handleMove(name)} disabled={isGameOver}>
                    <div>{name}</div>
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


// onLoad={(e) => {
//     e.target.style.objectFit = 'cover';
//     e.target.style.height = '10rem';
//     e.target.style.width = '12rem';
// }}