import { StorageService } from './storageService.js';
import { utilService } from './utilService.js';
import Axios from 'axios';
import { httpService } from './httpService.js'

const axios = Axios.create({
    withCredentials: true
})
const fs = require('fs')
var gPosts = require('../data/post.json')
const BASE_URL = 'http://localhost:3030/api/posts';


export const postService = {
    query,
    getById,
    savePost,
    remove
}

async function query() {
    var posts = await axios.get(`${BASE_URL}`)
        .then(res => res.data)
    if (!posts) {
        StorageService.save('posts', gPosts)
        return Promise.resolve(gPosts)
    }
    else return Promise.resolve(posts)
}
function getById(postId) {
    var gPosts = StorageService.load('posts')
    const post = gPosts.find(post => post._id === postId)
    if (post) return Promise.resolve(post)
    else return Promise.reject('No post')
}

// function remove(postId) {
//     var posts = gPosts
//     const idx = posts.findIndex(post => post._id === postId)

//     if (idx >= 0) {
//         posts.splice(idx, 1)
//         StorageService.save('posts', posts)
//         return Promise.resolve()
//     } else return Promise.reject('No post')
// }

async function remove(postId) {
    const res = await axios.delete(`${BASE_URL}/${postId}`),
        { data } = res
    return data
}

// function savePost(post) {
//     var gPosts = StorageService.load('posts')

//     if (post._id) {
//         const idx = gPosts.findIndex(currPost => currPost._id === post._id)
//         gPosts[idx] = post;
//     } else {
//         post._id = utilService.makeId()
//         gPosts.unshift(post)
//     }
//     StorageService.save('posts', gPosts)
//     // _saveEventisToFile(gPosts)
//     return Promise.resolve(post)
// }

async function savePost(post) {
    console.log('POST SERVICE FRONT')
    console.log('enter savePost', post._id);
    var res;
    if (post._id) {
        console.log('entrer if post._id');
        res = await axios.put(`${BASE_URL}/${post._id}`, {post: post})
        console.log('exist post.id');
    }
    else {
        res = await axios.post(BASE_URL, post)
        console.log('else');
    }
    // if (!res?.data) return Promise.reject('Unauthorized activity')
    // return res.data
    console.log('res',res);
    return res.data
}

// async function savePost(post) {
//     console.log('enter savePost', post);
//     const currPost = await httpService.post(`post`, post)

//     // review.byUser = userService.getLoggedinUser()
//     // review.aboutUser = await userService.getById(review.aboutUserId)
//     // const addedReview = storageService.post('review', review)

//     return currPost
// }

function _savePostsToFile(gPosts) {
    fs.writeFileSync('data/post.json', JSON.stringify(gPosts, null, 2))
}