import React from 'react';

const PostItem = () => {
    return (
        <div>
            <div className='post'>
                <div className='post__content'>
                    <strong>1. Java Script</strong>
                    <div>
                        Java Script - это язык программироввния.
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;