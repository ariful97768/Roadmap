import { useContext, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='max-w-[1536px] mx-auto px-20 shadow-md flex items-center justify-between py-2'>
            <div>
                <h3 className="font-bold text-2xl leading-4"><span className="italic">Idea </span><br /><span className="italic ml-3">Nest</span></h3>
            </div>
            <div className="relative">
                <img onMouseEnter={() => setIsOpen(true)} className="rounded-full w-10 h-10" src={user?.photoURL} alt="profile" />
                <div onMouseLeave={() => setIsOpen(false)} onMouseEnter={() => setDropdown(true)} className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow z-10 transition-all duration-300 origin-top transform px-4 py-3 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    <div className="text-right" ><span
                        onClick={() => setIsOpen(false)}
                        className="inline-block py-1 px-[10px] border rounded-full cursor-pointer transform transition duration-300 hover:rotate-90"
                    >
                        X
                    </span>

                    </div>
                    <h3 className="px-3 font-medium">{user?.displayName}</h3>
                    <p className="px-3 text-xs mb-4 opacity-80 overflow-hidden">{user?.email}</p>
                    <Link onClick={() => setTimeout(() => setIsOpen(false), 200)} className="hover:bg-orange-100 block   px-3 rounded-md" to={'/'}>Home</Link>
                    <div onClick={() => setTimeout(() => setIsOpen(false), 200)} className="hover:bg-red-600 rounded-md px-3 hover:text-white cursor-pointer active:scale-95 transition-transform duration-300 ">Logout</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;