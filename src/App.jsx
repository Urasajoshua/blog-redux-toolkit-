import React from 'react'
import PostList from './app/features/Post/PostList'
import AddFormPost from './app/features/Post/AddFormPost'

const App = () => {
  return (
    <div>
      <p className=''>
        <PostList/>
      </p>
      <AddFormPost/>
    </div>
  )
}

export default App
