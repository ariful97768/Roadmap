import { useContext, useState } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const Comment = ({ comment, replyInp, setReply, handleComment, deleteComment, setToggleEdit, toggleEdit, setEditReply, editReply, handleUpdate }) => {
    const { user } = useContext(AuthContext)

    return (
        <>
            <div className="flex gap-2 rounded-bl-xl border-gray-600 px-3 border-b border-l mt-3">
                <div>
                    {
                        editReply === comment._id ?
                            <form onSubmit={(e) => handleUpdate(e, comment?._id)} className="flex items-center gap-3 w-full min-w-sm sm:min-w-md md:min-w-xl">
                                <img className="w-10 rounded-full h-10" src={comment?.photoURL} alt="" />
                                <textarea defaultValue={comment?.comment} placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                                <div onClick={() => setEditReply(false)} className="px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>
                                <button className="cursor-pointer px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                    </svg>
                                </button>
                            </form>
                            :
                            <div className="flex gap-2">
                                <div className="flex-shrink-0">
                                    <img className="w-10 rounded-full h-10" src={comment?.photoURL} alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3>{comment?.userName}</h3>
                                    </div>
                                    <p className="text-sm">{comment?.comment}</p>
                                </div>
                            </div>
                    }

                    <div className="flex ml-12 mt-2 text-sm gap-4 items-center pb-2">
                        <p>{new Date().getHours() - new Date(comment?.time).getHours()}h ago</p>
                        <button onClick={() => setReply(comment?._id)}>Reply</button>
                        <div className="cursor-pointer" onClick={() => toggleEdit ? setToggleEdit(null) : setToggleEdit(comment?._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </div>
                        {
                            comment?.userId === user?.uid ? (<div className={` ${toggleEdit === comment?._id ? 'block' : 'hidden'}`}>
                                <div className="flex gap-2">
                                    <div onClick={() => setEditReply(comment?._id)} className="hover:text-yell00 cursor-pointer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                        </svg>
                                    </div>
                                    <div onClick={() => deleteComment(comment?._id)} className="hover:text-red-700 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>) : null
                        }

                    </div>
                </div>
            </div>
            {
                replyInp === comment?._id &&
                <form onSubmit={(e) => handleComment(e, comment?._id)} className="flex mt-3 items-center ml-3 gap-3 max-w-2xl">
                    <img className="w-10 rounded-full h-10" src={comment?.photoURL} alt="" />
                    <textarea placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                    <button className="px-5 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">Send</button>
                </form>
            }

            {/* second level comment */}
            {comment?.replies?.map(reply => <>
                <div key={reply?._id} className="flex flex-col gap-2 ml-6 pl-6 rounded-bl-xl border-b border-l mt-3">
                    {
                        editReply === reply?._id ? <form onSubmit={(e) => handleUpdate(e, reply?._id)} className="flex items-center gap-3 w-full min-w-sm sm:min-w-md md:min-w-xl">
                            <img className="w-10 rounded-full h-10" src={reply?.photoURL} alt="" />
                            <textarea defaultValue={reply?.comment} placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                            <div onClick={() => setEditReply(false)} className="px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                            <button className="cursor-pointer px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                </svg>
                            </button>
                        </form>
                            : <div className="flex gap-2">
                                <div className="flex-shrink-0">
                                    <img className="w-10 rounded-full h-10" src={reply?.photoURL} alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3>{reply?.userName}</h3>
                                    </div>
                                    <p className="text-sm">{reply?.comment}</p>
                                </div>
                            </div>
                    }
                    <div>
                        <div className="flex ml-12 text-sm gap-4 pb-2">
                            <p>{new Date().getHours() - new Date(reply.time).getHours()}h ago</p>
                            <button onClick={() => setReply(reply?._id)}>Reply</button>
                            <div className="cursor-pointer" onClick={() => toggleEdit ? setToggleEdit(null) : setToggleEdit(reply?._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </div>
                            {
                                reply?.userId === user?.uid ? <div className={` ${toggleEdit === reply?._id ? 'block' : 'hidden'}`}>
                                    <div className="flex gap-2">
                                        <div onClick={() => setEditReply(reply?._id)} className="hover:text-yell00 cursor-pointer" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                            </svg>
                                        </div>
                                        <div onClick={() => deleteComment(reply?._id)} className="hover:text-red-700 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
                {
                    replyInp === reply._id &&
                    <form onSubmit={(e) => handleComment(e, reply?._id)} className="flex items-center mt-3 gap-4 max-w-2xl ml-12">
                        <img className="w-10 rounded-full h-10" src={reply?.photoURL} alt="" />
                        <textarea placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                        <button className="px-5 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">Send</button>
                    </form>
                }

                {/* third level comment */}
                {
                    reply.replies.length > 0 ?
                        reply.replies.map(replyToReply => <>
                            <div key={replyToReply?._id} className="flex flex-col rounded-bl-xl gap-2 ml-18 pl-6 border-b border-l mt-3">
                                {
                                    editReply === replyToReply?._id ?
                                        <form onSubmit={(e) => handleUpdate(e, replyToReply?._id)} className="flex items-center gap-3 w-full min-w-sm sm:min-w-md md:min-w-xl">
                                            <img className="w-10 rounded-full h-10" src={replyToReply?.photoURL} alt="" />
                                            <textarea defaultValue={replyToReply?.comment} placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                                            <div onClick={() => setEditReply(false)} className="px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                            </div>
                                            <button className="cursor-pointer px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                                                </svg>
                                            </button>
                                        </form>
                                        :
                                        <div className="flex gap-2">
                                            <div className="flex-shrink-0">
                                                <img className="w-10 rounded-full h-10" src={replyToReply?.photoURL} alt="" />
                                            </div>
                                            <div className="items-center gap-2">
                                                <h3>{replyToReply?.userName}</h3>
                                                <p className="text-sm">{replyToReply.comment}</p>
                                            </div>
                                        </div>
                                }
                                <div>
                                    <div className="flex ml-12 text-sm gap-2 pb-2">
                                        <p>{new Date().getHours() - new Date(replyToReply.time).getHours()}h ago</p>
                                        <button onClick={() => setReply(replyToReply?._id)}>Reply</button>
                                        <div className="cursor-pointer" onClick={() => toggleEdit ? setToggleEdit(null) : setToggleEdit(replyToReply?._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                            </svg>
                                        </div>
                                        {
                                            replyToReply?.userId === user?.uid ? <div className={` ${toggleEdit === replyToReply?._id ? 'block' : 'hidden'}`}>
                                                <div className="flex gap-2">
                                                    <div onClick={() => setEditReply(replyToReply?._id)} className="hover:text-yell00 cursor-pointer" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                                        </svg>
                                                    </div>
                                                    <div onClick={() => deleteComment(replyToReply?._id)} className="hover:text-red-700 cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                replyInp === replyToReply._id &&
                                <form onSubmit={(e) => handleComment(e, reply?._id)} className="flex items-center mt-3 ml-24 gap-4 max-w-2xl">
                                    <img className="w-10 rounded-full h-10" src={replyToReply?.photoURL} alt="" />
                                    <textarea placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" name="comment" id=""></textarea>
                                    <button className="px-5 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">Send</button>
                                </form>
                            }
                        </>)
                        :
                        ""
                }
            </>

            )}
        </>
    );
};

export default Comment;