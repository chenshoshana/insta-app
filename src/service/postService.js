import { StorageService } from './storageService.js';
const fs = require('fs')
var gPosts = require('../data/post.json')


export const postService = {
    query,
    getById
    // savePost,
    // remove
}


function query() {
    var posts = StorageService.load('posts')
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

// function remove(eventiId) {
//     const idx = gEventis.findIndex(eventi => eventi._id === eventiId)
//     if (idx >= 0) {
//         gEventis.splice(idx, 1)
//         _saveEventisToFile()
//         return Promise.resolve()
//     }
//     else return Promise.reject('No eventi')

// }

function savePost(post) {
    var gPosts = StorageService.load('posts')
    console.log(gPosts);
    console.log(post);
    if (post._id) {
        const idx = gPosts.findIndex(currPost => currPost._id === post._id)
        gPosts[idx] = post;
    } else {
        post._id = _makeId()
        gPosts.unshift(post)
    }
    StorageService.save('posts', gPosts)
    // _saveEventisToFile(gEventies)
    return Promise.resolve(post)
}


function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _savePostsToFile(gPosts) {
    fs.writeFileSync('data/post.json', JSON.stringify(gPosts, null, 2))
}