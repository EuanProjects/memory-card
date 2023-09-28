import { useState, useEffect } from "react";

function Modal({ wonOrLoss, handleRestart }) {
    const [modalGif, setModalGif] = useState('');

    useEffect(() => {
        async function fetchBackgroundGifs() {
            const apiUrl = wonOrLoss ? "https://api.giphy.com/v1/gifs/RcnBddxfrILe9K0Sr4/?api_key=e38aN7u7mjDWNpnonpOMF5kODDofMQAj" : "https://api.giphy.com/v1/gifs/2Y0D4uUa4I0nrKIaNq/?api_key=e38aN7u7mjDWNpnonpOMF5kODDofMQAj"
            try {
                const response = await fetch(apiUrl
                    , { mode: 'cors' });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const gifUrl = data.data.images.original.url
                setModalGif(gifUrl);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchBackgroundGifs();
    })

    return (
        <>
            <div className="w-[100vw] h-[100vh] absolute bg-black opacity-50 z-10">
            </div>
            <div className="grid place-items-center absolute w-[100vw] h-[100vh]">
                <div className=" w-[400px] h-[200px] bg-valorantred rounded-lg border-8 border-valorantblack text-white z-40 grid place-content-center">
                    <div className="h-[100px] w-[175px]" style={{ backgroundImage: `url(${modalGif})`, backgroundSize: 'contain', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    </div>
                    <div ><h2 className="font-valorant text-2xl text-center">{wonOrLoss ? "won" : "lost"}</h2></div>
                    <button className="font-valorant text-valorantred bg-valorantblack rounded-xl" onClick={() => handleRestart()}>Restart</button>
                </div>
            </div>
        </>
    )
}

export default Modal