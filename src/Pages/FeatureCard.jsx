import { useState } from "react";
import arrowIcon from "../assets/icons8-arrow-50.png";
import { Link } from "react-router-dom";
const FeatureCard = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <div>
            <div className='mx-3 mt-7 px-5 border textwh bg-yellow-400 max-w-max rounded-tr-2xl border-b-0'>Planned</div>
            <div className='mx-3 px-5 py-3 border rounded-lg rounded-tl-none flex flex-col gap-5'>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Dark Mode for Dashboard</h3>
                    <p>Many users prefer working in low-light environments. We're introducing a dark theme for the CodeNest dashboard to reduce eye strain and improve late-night productivity. This will include updates to all dashboard components, sidebars, and syntax highlighting themes.</p>
                </div>
                <div className='flex gap-10'>
                    <div className="flex items-center gap-2">
                        <button onClick={handleClick} className={`bg-yellow-100 border border-red-200 px-2 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer ${clicked ? 'bg-yellow-300' : ''}`}>
                            <img className="w-5 h-5 -rotate-90" src={arrowIcon} alt="" />
                        </button>
                        <span>{clicked ? 34 : 33}</span>
                    </div>
                    <Link to={'/details/'+'id'} className="py-1 rounded underline" >Comment {"99+"}</Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;