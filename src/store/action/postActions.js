import { postService } from "../../service/postService.js"

export function loadPosts(filterBy) {
    return (dispatch) => {
        postService.query(filterBy).then(posts => { dispatch({ type: 'SET_POSTS', posts: posts }) })
        
    }
}

// export function getById(postId) {
    
//     return postService.getById(postId)
// }
// export function getById(postId) {
//     return postService.getById(postId)
// }
// export function setFilter(filterBy) {
//     return (dispatch) => dispatch({ type: 'FILTER', filterBy })
// }

export function removePost(postId) {
    return (dispatch) => {
        postService.removePost(postId).then(() => { dispatch({ type: 'REMOVE_POST', postId: postId }) })
    }
}

export function editPost(post) {
    return (dispatch) => {
        postService.savePost(post)
            .then(() => { dispatch({ type: 'EDIT_POST', post: post }) })
            .catch(err => {
                alert('OOPs, try again');
                console.log('ERR:', err);
            })
    }
}
export function addPost(post) {
    console.log(post, 'actions');
    return (dispatch) => {
        postService.savepost(post).then((savedPost) => { dispatch({ type: 'ADD_POST', post: savedPost }) })
    }
}

