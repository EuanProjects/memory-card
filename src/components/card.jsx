function Card({ name, fullPortrait, handleMove, isGameOver }) {
    return (
        <>
            <div className="w-48 h-64 min-w-[190px] bg-valorantred">
                <button className="w-full h-full" onClick={() => handleMove(name)} disabled={isGameOver}>
                    <div>{name}</div>
                    <img
                        src={fullPortrait}
                        alt={name}
                        style={{ objectFit: 'cover', height: '10rem', width: '12rem'}}
                    />
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