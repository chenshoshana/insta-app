

export function CommentPreview({ comment }) {

    // const { title, comments, likes } = post
    // var total = {
    //     likes: [],
    //     comments: []
    // }
    // if (!total.comments || !total.comments.length) {
    //     total.comments = []

    // } else if (!total.likes || !total.likes.length) {
    //     total.likes = []
    // } else {
    //     total.comments = comments
    //     total.likes = likes
    //     const commentsCount = comments.forEach(comment => {
    //         total.comments += comment;
    //         const likeRating = comments.forEach(comment => {
    //             total.comments += comment.rate;
    //         })
    //     }
    return (
        <section>
            <div className="comment-preview">
                <img className="user-img" src={comment.byUser.imgUrl}></img>
                <div>
                    <div className="comment-details">
                        <p>{comment.byUser.username}</p>
                        <p>{comment.txt}</p>
                    </div>
                    <div>
                        <p>{comment.createdAt}*weeks ago*</p>
                        <p>likes:{comment.likes.length}</p>

                    </div>

                </div>
            </div>
        </section>
    );
}








