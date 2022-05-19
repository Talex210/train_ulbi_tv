import React, {useState} from 'react';
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
import './styles/App.css'
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Java Script', body: 'Description'},
        {id: 2, title: 'Java Script 2', body: 'Description'},
        {id: 3, title: 'Java Script 3', body: 'Description'},
        {id: 4, title: 'Java Script 4', body: 'Description'},
        {id: 5, title: 'Java Script 5', body: 'Description'}
    ])

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
    }

    return (
        <div className='App'>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <form>
                {/*Управляемы компонент*/}
                <MyInput type='text' placeholder='Название поста' value={title}
                         onChange={e => setTitle(e.target.value)}/>
                {/*---*/}
                <MyInput type='text' placeholder='Описание поста'/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

export default App;
