import { useState } from "react"
import List from './List'
import './AddItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDown, faCircleUp} from '@fortawesome/free-solid-svg-icons'

function AddItem() {
    const [addItem, setAddItem] = useState({
        input: '',
        items: []
    })
    const [showMenu, setShowMenu] = useState(false)
    const [category, setCategory] = useState("Select Category")
    const [emptyCategory, setEmptyCategory] = useState(false)
    const [emptyItem, setEmptyItem] = useState(false)

    function handleChange(event) {
        setAddItem({
            input: event.target.value,
            items: [...addItem.items]
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (category === "Select Category") {
            setEmptyCategory(true)
        } else {
            setEmptyCategory(false)
        }
        if (!addItem.input) {
            setEmptyItem(true)
        } else {
            setEmptyItem(false)
        }
        if (category !== "Select Category" && addItem.input) {   
            const item = [ category, addItem.input ]
            setAddItem({
                items: [...addItem.items, item],
                input: ''
            })
        }
    }

    function handleClick(event) {
        setAddItem({
            items: addItem.items.filter((item) => {
            if (item[1] !== event.target.firstChild.data) return item
            }),
            input: ''
        })
    }

    function handleDrop(event) {
        if (showMenu === false) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }

    function selectCategory(event) {
        setCategory(event.target.firstChild.data)
        setShowMenu(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="addItem-form" className="container">
                <h2 className="grid-item">Add item: </h2>  
                <input 
                    value={addItem.input}
                    onChange={handleChange} 
                    className={`grid-item addItem-input ${emptyItem ? 'submit-error' : ''}`}
                />
                <button type='submit' className="grid-item" id="addItem-button">Add!</button>
                <div className="grid-item" id="category-drop">
                    <button type='button' onClick={handleDrop} className={`drop-btn ${emptyCategory ? 'submit-error' : ''}`}>{category} <FontAwesomeIcon icon={showMenu ? faCircleUp : faCircleDown} /></button>
                    <div className={`${"drop-items"} ${showMenu ? "show" : ""}`}>
                        <a className="drop-item" href="#" onClick={selectCategory}>Fruit and Veg</a>
                        <a className="drop-item" href="#" onClick={selectCategory}>Meat and Fish</a>
                        <a className="drop-item" href="#" onClick={selectCategory}>Essentials</a>
                        <a className="drop-item" href="#" onClick={selectCategory}>Drinks</a>
                        <a className="drop-item" href="#" onClick={selectCategory}>Other</a>
                    </div>
                </div>
            </form>
            <List newItem={addItem.items.length ? addItem.items[addItem.items.length - 1] : []} items={addItem.items} handleClick={handleClick}/>
        </>
        )
}

export default AddItem