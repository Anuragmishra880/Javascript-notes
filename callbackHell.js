
// const xhr = new XMLHttpRequest()
// xhr.responseType = "json"
// xhr.addEventListener("load", () => {
//     console.log(xhr.response)

// })
// xhr.open("GET",'https://dummyjson.com/users');
// xhr.send()

// makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//       makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//         makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//           console.log(userData,postsData);
//         });
//       });
//     });
//   })


// fix it by promise

function makeHttpRequest(method, url) {


    const xhr = new XMLHttpRequest()
    xhr.responseType = "json"

    const promise = new Promise((resolve, reject) => {
        xhr.addEventListener("load", () => {
            resolve(xhr.response)
        })
        xhr.addEventListener("error", () => {
            reject('request rejected')
        })

    })

    xhr.open(method, url);
    xhr.send()
    return promise
}

makeHttpRequest("GET", "https://dummyjson.com/users")
    .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
    .then((_postData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${_postData.posts[0].id}`))
    .then((CommentData) => makeHttpRequest('GET', `https://dummyjson.com/users/${CommentData.comments[0].user.id}`))
    .then((userData) => console.log(userData))
    .catch((err) => console.log(err))

