import { useContext } from "react";
import logo from "../assets/icons8-rockstar-games-100.png"
import { AuthContext } from "../ContextProvider/AuthProvider";
const Aside = () => {
    const { setStatus } = useContext(AuthContext)
    return (
        <div className="lg:shadow-xl lg:max-w-[420px] p-5 border border-gray-300 bg-white rounded-md">
            {/* logo, name, description */}
            <div className="border p-3 rounded-md border-gray-400">
                <div className="flex items-center gap-3">
                    <img className="max-w-14" src={logo} alt="logo" />
                    <h2 className="text-2xl font-bold">DevForge</h2>
                </div>
                <p className=" mt-5">
                    DevForge is an all-in-one platform for developers to share, collaborate, and build projects faster with real-time tools, rich documentation, and a growing community. Whether you're working solo or as part of a team, DevForge streamlines your development workflow and helps you ship better code, faster.
                </p>
            </div>

            {/* sorting methods */}
            <div className="grid grid-cols-2 gap-3 my-10">
                <button onClick={() => setStatus('all')} className="bg-slate-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">All Features</button>
                <button onClick={() => setStatus('Planned')} className="bg-yellow-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">Planned</button>
                <button onClick={() => setStatus('In Progress')} className="bg-blue-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">In Progress</button>
                <button onClick={() => setStatus('Released')} className="	bg-green-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">Released</button>
            </div>

            {/* footer */}
     
            <div className="flex px-8 justify-between items-center">
                <div><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-9 h-9 hover:cursor-pointer transition-colors hover:fill-blue-700 duration-500">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" /></svg></a></div>
                <div><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-9 h-9 hover:cursor-pointer transition-colors duration-500 hover:fill-blue-700">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg></a></div>
                <div><a href="#"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-9 h-9 hover:cursor-pointer transition-colors duration-500 hover:bg-black hover:fill-white rounded-full ">    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" /></svg></a></div>
                <div> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-9 h-9 hover:cursor-pointer transition-colors duration-500 hover:fill-green-700">    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" /></svg></a></div>
            </div>
        </div>
    );
};

export default Aside;