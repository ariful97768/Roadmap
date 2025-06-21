import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";

const FeatureDetails = () => {
    const loaderData = useLoaderData()
    const [comments, setComment] = useState([])
    const userId = 322
    console.log(loaderData, comments);
    useEffect(() => {
        fetch(`http://localhost:5000/get-comments/${loaderData?._id}?userId=${userId}`)
            .then(res => res.json())
            .then(res => setComment(res))
            .catch(err => console.log(err))
    }, [loaderData._id])

    const handleComment = e => {
        e.preventDefault();
        const comment = {
            userId: "322",
            photoURL: 'https://picsum.photos/200/300',
            postId: loaderData._id,
            comment: e.target.comment?.value,
            time: new Date(),
            upvote: 0,
            replies: [{
                userId: "322",
                photoURL: 'https://picsum.photos/200/300',
                comment: e.target.comment?.value,
                time: new Date(),
                upvote: 0,
                replies: []
            },
            {
                userId: "322",
                photoURL: 'https://picsum.photos/200/300',
                comment: e.target.comment?.value,
                time: new Date(),
                upvote: 0,
                replies: [{
                    userId: "322",
                    photoURL: 'https://picsum.photos/200/300',
                    comment: e.target.comment?.value,
                    time: new Date(),
                    upvote: 0,
                    replies: []
                }]
            },
            {
                userId: "322",
                photoURL: 'https://picsum.photos/200/300',
                comment: e.target.comment?.value,
                time: new Date(),
                upvote: 0,
                replies: []
            }]
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
                } else {
                    alert('Something went wrong')
                }
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
                <form onSubmit={handleComment} className="flex items-center gap-4 mt-4 mb-6">
                    <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
                    <input className="px-5 py-2 rounded-lg mr-4 w-full max-w-xs border" type="text" name="comment" id="" />
                    <button className="px-5 py-2 border rounded-lg active:scale-95 ease-in-out transform duration-300">Submit</button>
                </form>
            </div>

            {/* comments */}

            {comments.map(comment => <Comment key={comment._id} comment={comment} />)
            }

        </div>
    );
};

export default FeatureDetails;

<div>
    {/* first layer */}

    {/* second layer */}
    <div className="flex gap-2 ml-12 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    {/* third layer */}
    <div className="flex gap-2 ml-24 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    {/* third layer */}
    <div className="flex gap-2 ml-24 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    {/* third layer */}
    <div className="flex gap-2 ml-24 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    <div className="flex gap-2 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    <div className="flex gap-2 ml-12 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    <div className="flex gap-2 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    <div className="flex gap-2 ml-12 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
    <div className="flex gap-2 mt-3">
        <div className="flex-shrink-0">
            <img className="w-10 rounded-full h-10" src="https://picsum.photos/200/300" alt="" />
        </div>
        <div>
            <div className="flex items-center gap-2">
                <h3>John Doe</h3>
                <p className="text-xs text-gray-700">{'3d'} ago</p>
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa animi, aperiam voluptas non ut, quae sit alias vitae, rerum corporis qui illo? Debitis, alias? Eos repellat asperiores cum iure?</p>

            <div className="flex text-sm gap-2">
                <p>5h</p>
                <p>UP</p>
                <button>Reply</button>
            </div>
        </div>
    </div>
</div>