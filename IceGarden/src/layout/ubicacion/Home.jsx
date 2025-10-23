import Mapa from "./mapa/Mapa";

function Home () {
    return(<>
        <div className="flex flex-row bg-[#F7E8E4] justify-center items-center min-h-screen w-full">
            <div className="m-5 z-0">
                <Mapa className="w-[50vw] h-[70vh]" />
            </div>

            <div className="w-[35vw] h-[70vh] bg-white">

            </div>
        </div>
    </>)
}

export default Home;