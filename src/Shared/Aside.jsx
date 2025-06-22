import { useContext } from "react";
import logo from "../assets/icons8-rockstar-games-100.png"
import { AuthContext } from "../ContextProvider/AuthProvider";
const Aside = () => {
    const { setStatus } = useContext(AuthContext)
    return (
        <div className="border p-3 rounded-md">
            {/* logo, name, description */}
            <div className="border">
                <div className="flex items-center gap-3">
                    <img className="max-w-14" src={logo} alt="logo" />
                    <h2 className="text-2xl font-bold">DevForge</h2>
                </div>
                <p className=" mt-5">
                    DevForge is an all-in-one platform for developers to share, collaborate, and build projects faster with real-time tools, rich documentation, and a growing community. Whether you're working solo or as part of a team, DevForge streamlines your development workflow and helps you ship better code, faster.
                </p>
            </div>

            {/* sorting methods */}
            <div className="flex flex-col gap-3 my-10">
                <button onClick={()=>setStatus('Planned')} className="bg-yellow-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">Planned</button>
                <button onClick={()=>setStatus('In Progress')} className="bg-blue-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">In Progress</button>
                <button onClick={()=>setStatus('Released')} className="	bg-green-400 text-black border border-red-200 px-5 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer">Released</button>
            </div>

            {/* footer */}
            <div className="flex border px-5 justify-between items-center">
                <div>FB</div>
                <div>Insta</div>
                <div>linke</div>
                <div>YT</div>
            </div>
        </div>
    );
};

export default Aside;