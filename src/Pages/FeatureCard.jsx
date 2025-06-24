import { useState } from "react";
import arrowIcon from "../assets/icons8-arrow-50.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
const FeatureCard = ({ data, refetch, setRefetch }) => {
    const { user } = useContext(AuthContext)
    const handleClick = (id) => {
        fetch(`https://roadmap-server-woad.vercel.app/vote/${id}?userId=${user?.uid}`, {
            headers: { 'content-type': 'application/json' },
            body: "",
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(res => {
                setRefetch(!refetch)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="md:mx-3">
            <div className={` mt-7 px-5 border max-w-max rounded-tr-2xl border-b-0 ${data.status === 'Planned' && 'bg-yellow-400'} ${data.status === 'In Progress' && 'bg-blue-400'} ${data.status === 'Released' && 'bg-green-400'}`}>{data?.status}</div>
            <div className='bg-white/40 shadow-md px-5 py-3 border rounded-lg rounded-tl-none flex flex-col gap-5'>
                <div>
                    <h3 className='text-2xl font-semibold mb-1'>{data.title}</h3>
                    <p className="text-gray-700 mb-3 text-xs md:text-sm">{new Date(data.postedTime).toDateString()}</p>
                    <p>{data.description}</p>
                </div>
                <div className='flex gap-10'>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleClick(data._id)} className={`bg-yellow-100 border border-red-200 px-2 py-1 rounded-lg active:scale-95 transition duration-200 ease-in-out hover:cursor-pointer ${data?.upvotedUserIds?.includes(user?.uid) ? 'bg-yellow-300' : ''}`}>
                            <img className="w-5 h-5 -rotate-90" src={arrowIcon} alt="" />
                        </button>
                        <span>{data.upvotes > 999 ? 999 + '+' : data.upvotes}</span>
                    </div>
                    <Link to={`/details/${data._id}`} className="py-1 rounded underline" >Comment</Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;