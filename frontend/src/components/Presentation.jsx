
const HomePage = ({ onEnter }) => {
    return (
        <div className="flex h-screen bg-color1 items-center justify-center">
            <div className="flex flex-col max-w-xs items-center justify-center bg-color1 w-1/2">
                <div className="w-32 h-32 bg-color2 rounded-full flex">
                </div>
                <p className="mt-12 text-2xl font-bold">Anhrt</p>
                <p className="mt-2 mb-12 text-xl">Plataforma de comida</p>
                <button onClick={onEnter} className="w-3/4 p-3 bg-color2 text-xl">Entrar</button>
            </div>
        </div>
    )
}

export default HomePage;