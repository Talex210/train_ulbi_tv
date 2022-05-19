import React from 'react';
import classes from './MyInput.module.css'

/*const MyInput = React.forwardRef((props, ref) => { // неуправляемый компонент оборачиваем в React.forwardRef
    return (
        <input ref={ref} {...props} className={classes.myInput}/>
    )
})*/

const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    )
}

export default MyInput;