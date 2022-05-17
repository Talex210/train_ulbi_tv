import React, {useState} from 'react';
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
import './styles/App.css'
import PostList from "./Components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Description'},
        {id: 2, title: 'Java Script 2', body: 'Description'},
        {id: 3, title: 'Java Script 3', body: 'Description'},
        {id: 4, title: 'Java Script 4', body: 'Description'},
        {id: 5, title: 'Java Script 5', body: 'Description'}
    ]);
    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', body: 'Description'},
        {id: 2, title: 'Python 2', body: 'Description'},
        {id: 3, title: 'Python 3', body: 'Description'},
        {id: 4, title: 'Python 4', body: 'Description'},
        {id: 5, title: 'Python 5', body: 'Description'}
    ]);
    return (
        <div className='App'>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <PostList posts={posts} title={'Посты про JS'}/>
            <PostList posts={posts2} title={'Посты про Python'}/>
        </div>
    );
}

export default App;
