import React from 'react'

const CreatPost = () => {
  return (
    <section className='create-post-section'>
        <h1>Create post Vamos</h1>

        <form >
            <input type="file" name="image" accept='image/*' />
            <input type="text" name='caption' placeholder='Enter caption' required/>
            <button type='submit'>Jaan Deyo</button>
        </form>
    </section>
  )
}

export default CreatPost