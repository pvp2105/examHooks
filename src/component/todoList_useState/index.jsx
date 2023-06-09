import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todos: [] ,
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick } = props;
    
    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }

    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.index} 
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

function Content() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [])

    return(
        <div> 
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export {TodoList, Content};