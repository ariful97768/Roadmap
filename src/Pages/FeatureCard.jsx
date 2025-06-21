import { useState } from "react";
import arrowIcon from "../assets/icons8-arrow-50.png";
import { Link } from "react-router-dom";
const FeatureCard = ({ data }) => {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <div>
            <div className={`mx-3 mt-7 px-5 border max-w-max rounded-tr-2xl border-b-0 ${data.status === 'Planned' && 'bg-yellow-400'} ${data.status === 'In Progress' && 'bg-blue-400'} ${data.status === 'Released' && 'bg-green-400'}`}>{data?.status}</div>
            <div className='mx-3 px-5 py-3 border rounded-lg rounded-tl-none flex flex-col gap-5'>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className='flex gap-10'>
                    <div className="flex items-center gap-2">
                        <button onClick={handleClick} className={`bg-yellow-100 border border-red-200 px-2 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer ${clicked ? 'bg-yellow-300' : ''}`}>
                            <img className="w-5 h-5 -rotate-90" src={arrowIcon} alt="" />
                        </button>
                        <span>{data.upvotes>999? 999+'+':data.upvotes}</span>
                    </div>
                    <Link to={`/details/${data._id}`} className="py-1 rounded underline" >Comment</Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;