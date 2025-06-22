import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const Comment = ({ comment, replyInp, setReply, handleComment, deleteComment }) => {
    const { user } = useContext(AuthContext)
    console.log(user, comment);

    return (
        <>
            <div className="flex gap-2 rounded-bl-xl border-gray-600 px-3 border-b border-l mt-3">
                <div className="flex-shrink-0">
                    <img className="w-10 rounded-full h-10" src={comment.photoURL} alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3>{comment.userName}</h3>
                        <p className="text-xs text-gray-700">{'3d'} ago</p>
                    </div>
                    <p className="text-sm">{comment.comment}</p>

                    <div className="flex text-sm gap-4">
                        <p>{new Date().getHours() - new Date(comment.time).getHours()}h ago</p>
                        <button onClick={() => setReply(comment?._id)}>Reply</button>
                        {
                            comment?.userId === user?.uid ? <div onClick={() => deleteComment(comment?._id)}>
                                delete
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
            {
                replyInp === comment._id &&
                <form onSubmit={(e) => handleComment(e, comment?._id)} className="flex gap-5 max-w-2xl">
                    <textarea className="border w-full" name="comment" id=""></textarea>
                    <button className="border px-2 py-1">Send</button>
                </form>
            }
            {comment.replies?.map(reply => <>
                <div key={reply?._id} className="flex gap-2 ml-6 pl-6 rounded-bl-xl border-b border-l mt-3">
                    <div className="flex-shrink-0">
                        <img className="w-10 rounded-full h-10" src={comment.photoURL} alt="" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3>{comment.userName}</h3>
                            <p className="text-xs text-gray-700">{'3d'} ago</p>
                        </div>
                        <p className="text-sm">{reply.comment}</p>
                        <div className="flex text-sm gap-2">
                            <p>{new Date().getHours() - new Date(reply.time).getHours()}h ago</p>
                            <button onClick={() => setReply(reply?._id)}>Reply</button>
                            {
                                reply?.userId === user?.uid ? <div onClick={() => deleteComment(reply?._id)}>
                                    delete
                                </div> : ""
                            }
                        </div>
                    </div>
                </div>
                {
                    replyInp === reply._id &&
                    <form onSubmit={(e) => handleComment(e, reply?._id)} className="flex gap-5 max-w-2xl ml-6">
                        <textarea className="border w-full" name="comment" id=""></textarea>
                        <button className="border px-2 py-1">Send</button>
                    </form>
                }
                {
                    reply.replies.length > 0 ?
                        reply.replies.map(replyToReply => <>
                            <div key={replyToReply?._id} className="flex rounded-bl-xl gap-2 ml-18 pl-6 border-b border-l mt-3">
                                <div className="flex-shrink-0">
                                    <img className="w-10 rounded-full h-10" src={replyToReply?.photoURL} alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3>{replyToReply?.userName}</h3>
                                        <p className="text-xs text-gray-700">{'3d'} ago</p>
                                    </div>
                                    <p className="text-sm">{replyToReply.comment}</p>
                                    <div className="flex text-sm gap-2">
                                        <p>{new Date().getHours() - new Date(replyToReply.time).getHours()}h ago</p>
                                        <button onClick={() => setReply(replyToReply?._id)}>Reply</button>
                                        {
                                            replyToReply?.userId === user?.uid ? <div onClick={() => deleteComment(replyToReply?._id)}>
                                                delete
                                            </div> : ""
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                replyInp === replyToReply._id &&
                                <form onSubmit={(e) => handleComment(e, reply?._id)} className="flex ml-18 gap-5 max-w-2xl">
                                    <textarea className="border w-full" name="comment" id=""></textarea>
                                    <button className="border px-2 py-1">Send</button>
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