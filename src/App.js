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
        {id: 3, title: 'Java Script 3', body: 'Description'}
    ])

    const [post, setPost] = useState({title: '', body: ''});

    // const bodyInputRef = useRef(); // Для не управляемого компонента

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
        // console.log(bodyInputRef.current.value)
    }

    return (
        <div className='App'>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <form>
                {/*Управляемы компонент*/}
                <MyInput type='text' placeholder='Название поста' value={post.title}
                         onChange={e => setPost({...post, title: e.target.value})}/>
                {/*---*/}
                {/*Не управляемы компонент*/}
                {/*<MyInput ref={bodyInputRef} type='text' placeholder='Описание поста'/>*/}
                {/*---*/}
                <MyInput type='text' placeholder='Описание поста' value={post.body}
                         onChange={e => setPost({...post, body: e.target.value})}/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

export default App;
