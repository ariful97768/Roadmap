const Comment = ({ comment }) => {

    return (
        <>
            <div className="flex gap-2 mt-3">
                <div className="flex-shrink-0">
                    <img className="w-10 rounded-full h-10" src={comment.photoURL} alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h3>{comment.userName}</h3>
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
            {comment.replies.map(reply=>'d')}
        </>
    );
};

export default Comment;