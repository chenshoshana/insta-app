import { postService } from "../../service/postService.js"


export function loadPosts(filterBy) {
    return (dispatch) => {
        console.log('filterBy', filterBy);
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
        console.log('postId', postId);
        postService.remove(postId).then(() => { dispatch({ type: 'REMOVE_POST', postId }) })
    }
}
// export function removePost(postId) {
//     return (dispatch) => {
//         return postService.remove(postId)
//         .then(post => {
//             const action = {
//                 type: 'REMOVE_POST',
//                 postId
//             }
//             dispatch(action)
//         })
//     }
// }
export function editPost(post) {
  console.log('post!!!', post)
  return (dispatch) => {
    postService.savePost(post)
      .then(() => { dispatch({ type: 'EDIT_POST', post }) })
      .catch(err => {
        alert('OOPs, try again');
        console.log('ERR:', err);
      })
  }
}
// export function addPost(post,comment) {

//     return (dispatch) => {
//         console.log('new post:', post);
//         postService.savePost(post).then((savedPost) => { dispatch({ type: 'ADD_POST', post: savedPost }) })
//     }
// }

export function addPost(post) {
  return async dispatch => {
    try {
      const addedPost = await postService.savePost(post)
      dispatch({ type: 'ADD_POST', post: addedPost })

      // const comment = await commentService.increaseComment()
      // dispatch({ type: 'SET_COMMENT', comment: comment })

    } catch (err) {
      console.log('PostActions: err in savePost', err)
    }
  }
}

// export function addPost(post) {
//     console.log('enter addPost at postAction');
//     return async dispatch => {
//       try {
//         const savedPost = await postService.savePost(post)
//         dispatch({ type: 'ADD_POST', post: savedPost })

//         // const score = await userService.increaseScore()
//         // dispatch({ type: 'SET_SCORE', score })

//       } catch (err) {
//         console.log('postActions: err in addPost', err)
//       }
//     }
//   }

