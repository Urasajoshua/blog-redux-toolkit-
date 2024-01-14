import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './PostSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <div key={post.id} className="mb-4 p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date}/>
            <p className="text-gray-700">{post.content.substring(0, 100)}</p>
        </div>
    ));

    return (
        <div className="max-w-2xl mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            {renderedPosts}
        </div>
    );
};

export default PostList;
