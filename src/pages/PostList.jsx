import { PostPreview } from "../cmps/PostPreview.jsx"

export function PostList({ posts }) {
    
    return (
        <div className="post-List">
            {posts.map(post => {
                return <PostPreview key={post._id} post={post} />
            })}
        </div>
    )
}