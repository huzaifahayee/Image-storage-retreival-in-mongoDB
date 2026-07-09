import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatPost = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        axios.post("http://localhost:3000/create-post", formData)
        .then((response) => {
            console.log(response.data);
            navigate('/feed');
            e.target.reset();
        })
        .catch((error) => {
            console.log(error);
            alert("Error creating post");
        })
    }

  return (
    <section className='create-post-section'>
        <h1>Create post Vamos</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept='image/*' />
            <input type="text" name='caption' placeholder='Enter caption' required/>
            <button type='submit'>Jaan Deyo</button>
        </form>
    </section>
  )
}

export default CreatPost