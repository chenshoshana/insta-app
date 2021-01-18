const posts = []
let localLoggedinUser = null
if (sessionStorage.loggedinUser) localLoggedinUser = JSON.parse(sessionStorage.loggedinUser)

const initialState = {
    posts: posts,
    filterBy: { name: '', type: '', inStock: '', minPrice: 0, maxPrice: Infinity },
    loggedinUser: localLoggedinUser
}
export function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        case 'EDIT_POST':
            const editedevPosts = state.posts.map(post => {
                if (post._id === action.post._id) {
                    return action.post;
                }
                return post;

            })
            // , inStock: '', minPrice: 0, maxPrice: 1000 }
            return { ...state, posts: editedevPosts }
        case 'ADD_POST':
            
            state = { ...state, posts: [...state.posts, action.post] }
            return state
        case 'FILTER':
            const regex = new RegExp(action.filterBy.text, 'i')
            if (action.filterBy.type === "All" && action.filterBy.text === "") {
                state = { ...state, posts: posts, filterBy: action.filterBy }
                return state
            }
            else {
                state = {
                    ...state, posts: posts.filter(post => ((regex.test(post.name)
                        && post.inStock === action.filterBy.type
                        && post.type === action.filterBy.type

                    ))), filterBy: action.filterBy
                }
                return state
            }
        case 'REMOVE_POST':
            state = { ...state, posts: state.posts.filter(post => post._id !== action.postId) }
            return state
        default:
            return state
    }

}

