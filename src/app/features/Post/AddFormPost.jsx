import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './PostSlice';
import { selectAllUsers } from '../users/UsersSlice';

const AddFormPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const onSavePostClicked = (e) => {
        e.preventDefault();
     

        if (title && content) {
            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
            setUserId('');
            console.log(userId);
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <div className="max-w-xl mx-auto mt-8">
            <section className="bg-white p-6 shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Add a new post</h2>
                <form onSubmit={onSavePostClicked}>
                    <div className="mb-4">
                        <label htmlFor="postTitle" className="block text-sm font-semibold mb-2">Post Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-sm font-semibold mb-2">Author:</label>
                        <select
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Author</option>
                            {usersOptions}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postContent" className="block text-sm font-semibold mb-2">Content:</label>
                        <input
                            type="text"
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none"
                        disabled={!canSave}
                    >
                        Save Post
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddFormPost;
