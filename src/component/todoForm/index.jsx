import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
    onSubmit: null
};

function TodoForm(props) {
    const { onSubmit } = props;
    const [myvalue, setMyValue] = useState('')

    function handleValue(e){
        setMyValue(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        const formValue = {
            title: myvalue
        }
        onSubmit(formValue)

        setMyValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={myvalue} onChange={handleValue}/>
        </form>
    );
}

export default TodoForm;