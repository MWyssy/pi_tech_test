import './Title.css'
import {useState} from 'react';



function Title() {
    const [isText, setIsText] = useState(true);
    const [input, setInput] = useState('');
    const [title, setTitle] = useState('');

    function handleClick(event) {
        setIsText(false)
        setTitle('')
    }

    function handleChange(event) {
        setInput(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setIsText(true)
        setTitle(input)
    }

    return (
        <section id="title" onClick={handleClick}>
            {
                !title ? (
                    isText ? (
                        <h1>Click to add a title...</h1>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input value={input} onChange={handleChange} id='title-input'/>
                            <button type='submit' id='title-button'></button>
                        </form>
                    )
                ) : (
                    <h1>{title}</h1>
                )
            }
        </section>
    )
}

export default Title