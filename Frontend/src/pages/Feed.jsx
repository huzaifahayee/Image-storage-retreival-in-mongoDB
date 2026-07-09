import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://picsum.photos/seed/ronaldo/600/400",
      caption: "This is a caption for the first post",
    },
  ])


  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then( (response) => { 
        console.log(response.data);
    setPosts(response.data.posts) })
         
    
  },[])

  return (
    <section className='feed-section'>
      {
        posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No posts available</h1>
        )
      }
    </section>
  )
}

export default Feed