const users = fetch("https://dummyjson.com/users")
  .then(res => res.json())
  .then(json => json.users)

const posts = fetch("https://dummyjson.com/posts")
  .then(res => res.json())
  .then(json => json.posts)


const comments = fetch("https://dummyjson.com/comments")
   .then(res => res.json())
   .then(json => json.comments)


//users.then(userList => console.log(userList))

posts.then(postsList => {
  const post = postsList[0]
  const userId = post.userId

    users.then(userList => {
       const user = userList.filter(user => user.id == userId)[0]
      
       console.log(post)
       console.log(user.firstName) 
    })


})