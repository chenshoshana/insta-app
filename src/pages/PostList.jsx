import { PostPreview } from "../cmps/PostPreview.jsx"

export function PostList({ posts: posts }) {
    return <div className="PostList">
        {posts.map(post => {
            return <PostPreview key={post._id} post={post} />
        })}
    </div>

}