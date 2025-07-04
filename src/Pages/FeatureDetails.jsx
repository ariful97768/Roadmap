import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Spinner from "../assets/Spinner";
import Swal from "sweetalert2";

const FeatureDetails = () => {
    const [refetch, setRefetch] = useState(false)
    const loaderData = useLoaderData()
    const [comments, setComment] = useState([])
    const { user } = useContext(AuthContext)
    const [loader, setLoader] = useState(true)
    // reply state
    const [reply, setReply] = useState(null)
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editReply, setEditReply] = useState(false);

    useEffect(() => {
        fetch(`https://roadmap-server-woad.vercel.app/get-comments/${loaderData?._id}?userId=${user?.uid}`)
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
            Swal.fire('Please write a comment')
            return
        }
        if (!e.target.comment.value.trim()) {
            Swal.fire("Comment cannot be empty!");
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

        fetch('https://roadmap-server-woad.vercel.app/add-comment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(comment),
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    Swal.fire('Comment success')
                    e.target.reset()
                } else {
                    Swal.fire('Something went wrong')
                }
                setRefetch(!refetch)
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        fetch(`https://roadmap-server-woad.vercel.app/delete-comment/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                if (res.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "OOPS!",
                        text: "Some unexpected error occurred.",
                        icon: "warning"
                    });
                }
                setRefetch(!refetch)
            })
            .catch(err => console.log(err))
    }

    const deleteComment = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id)
            }
        });
    }

    const handleUpdate = (e, id) => {
        e.preventDefault();
        if (!e.target.comment.value) {
            Swal.fire('Please write a comment')
            return
        }
        if (!e.target.comment.value.trim()) {
            Swal.fire("Comment cannot be empty!");
            return;
        }

        fetch(`https://roadmap-server-woad.vercel.app/update-comment/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ comment: e.target.comment.value }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount) {

                    Swal.fire('Comment updated successfully')
                } else {
                    Swal.fire('Something went wrong')
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
        <div className="lg:mx-4">
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
                <form onSubmit={(e) => handleComment(e,)} className="flex items-center gap-2 md:gap-4 mt-4 mb-6">
                    <img className="w-10 rounded-full h-10" src={user?.photoURL} alt="" />
                    <textarea placeholder="Comment" className="px-5 py-2 max-h-16 rounded-lg mr-2 w-full max-w-xl border" type="text" name="comment" id="" />
                    <button className="sm:px-5 px-2 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                    </svg></button>
                </form>
            </div>

            {/* comments */}

            {loader ?
                <Spinner />
                :
                comments.map(comment => <Comment key={comment._id} comment={comment} replyInp={reply} setReply={setReply} handleComment={handleComment} deleteComment={deleteComment} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} editReply={editReply} setEditReply={setEditReply} handleUpdate={handleUpdate} />)
            }

        </div>
    );
};

export default FeatureDetails;