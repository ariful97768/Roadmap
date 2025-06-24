import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Spinner from "../assets/Spinner";

const FeatureDetails = () => {
    const [refetch, setRefetch] = useState(false)
    const loaderData = useLoaderData()
    const [comments, setComment] = useState([])
    const { user, loader, setLoader } = useContext(AuthContext)
    const [reply, setReply] = useState(null)
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editReply, setEditReply] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:5000/get-comments/${loaderData?._id}?userId=${user?.uid}`)
            .then(res => res.json())
            .then(res => {
                setComment(res)
                setReply(null)
                setLoader(false)
            })
            .catch(err => console.log(err))
    }, [loaderData._id, refetch])

    const handleComment = (e, commentId = null) => {
        e.preventDefault();
        if (!e.target.comment.value) {
            alert('Please write a comment')
            return
        }
        if (!e.target.comment.value.trim()) {
            alert("Comment cannot be empty!");
            return;
        }
        const comment = {
            userId: user?.uid,
            userName: user?.displayName,
            photoURL: user?.photoURL,
            postId: loaderData?._id,
            comment: e.target.comment.value,
            time: new Date(),
            upvote: 0,
            replyTo: commentId
        }

        fetch('http://localhost:5000/add-comment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(comment),
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    alert('Comment success')
                    e.target.reset()
                } else {
                    alert('Something went wrong')
                }
                setRefetch(!refetch)
            })
            .catch(err => console.log(err))
    }

    const deleteComment = (id) => {
        fetch(`http://localhost:5000/delete-comment/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                if (res.deletedCount) {
                    alert('Comment success')
                } else {
                    alert('Something went wrong')
                }
                setRefetch(!refetch)
            })
            .catch(err => console.log(err))
    }

    const handleUpdate = (e, id) => {
        e.preventDefault();
        if (!e.target.comment.value) {
            alert('Please write a comment')
            return
        }
        if (!e.target.comment.value.trim()) {
            alert("Comment cannot be empty!");
            return;
        }

        fetch(`http://localhost:5000/update-comment/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ comment: e.target.comment.value }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount) {

                    alert('Comment updated successfully')
                } else {
                    alert('Something went wrong')
                }
                console.log(res);
                setRefetch(!refetch)
                setToggleEdit(false)
                setEditReply(false)
                e.target.reset()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mx-16">
            <div>
                {/* post section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">{loaderData.title}</h2>
                    <div>
                        {loaderData.description}
                    </div>
                </div>
            </div>
            <hr className="my-6" />
            {/* comment section */}
            <div>
                <div>
                    <h3 className="text-2xl font-bold">Comments</h3>
                    <p className="text-gray-500">Leave a comment to share your thoughts or suggestions.</p>
                </div>
                {/* comment input */}
                <form onSubmit={(e) => handleComment(e,)} className="flex items-center gap-4 mt-4 mb-6">
                    <img className="w-10 rounded-full h-10" src={user?.photoURL} alt="" />
                    <textarea className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" type="text" name="comment" id="" />
                    <button className="px-5 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">Comment</button>
                </form>
            </div>

            {/* comments */}

            {loader ?
               <Spinner/>
                :
                comments.map(comment => <Comment key={comment._id} comment={comment} replyInp={reply} setReply={setReply} handleComment={handleComment} deleteComment={deleteComment} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} editReply={editReply} setEditReply={setEditReply} handleUpdate={handleUpdate} />)
            }

        </div>
    );
};

export default FeatureDetails;