import React from 'react';
// import ClassCounter from "./Components/ClassCounter";
// import Counter from "./Components/Counter";
import './styles/App.css'
import PostItem from "./Components/PostItem";

function App() {
    return (
        <div className='App'>
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <PostItem post={{id: 1, title: 'Java Script', body: 'Description'}}/>
            <PostItem post={{id: 2, title: 'Java Script', body: 'Description'}}/>
            <PostItem post={{id: 3, title: 'Java Script', body: 'Description'}}/>
            <PostItem post={{id: 4, title: 'Java Script', body: 'Description'}}/>
            <PostItem post={{id: 5, title: 'Java Script', body: 'Description'}}/>
            <PostItem post={{id: 6, title: 'Java Script', body: 'Description'}}/>
        </div>
    );
}

export default App;
