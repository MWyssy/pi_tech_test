import { useState, useEffect } from "react"
import List from './List'
import './AddItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleDown, faCircleUp} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function AddItem() {
    
    
    const [addItem, setAddItem] = useState({
        list: {},
        input: ''
    })
    const [showMenu, setShowMenu] = useState(false)
    const [category, setCategory] = useState("Select Category")
    const [emptyCategory, setEmptyCategory] = useState(false)
    const [emptyItem, setEmptyItem] = useState(false)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios(`${import.meta.env.VITE_API_BASE_URL}`);
                const catArray = Object.keys(request.data.items)
                catArray.forEach((cat) => {
                    if (request.data.items[cat].length > 0) {
                        
                        setCategories(prevCategories => [...prevCategories, cat])
                        setAddItem({
                            list: request.data.items,
                            input: addItem.input,
                        })
                        
                    }
                })
            }
            catch (error) {
                console.log("Error fetching list items:", error)
            }
        };
        fetchData();
    }, [])

    function handleChange(event) {
        setAddItem({
            input: event.target.value,
            list: {...addItem.list}
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
            let url = ''

            switch (category) {
                case 'Fruit and Veg':
                    url = 'fruitveg';
                    break;
                case 'Meat and Fish':
                    url = 'meat';
                    break;
                case 'Essentials':
                    url = 'essentials';
                    break;
                case 'Drinks':
                    url = 'drinks';
                    break;
                case 'Other':
                    url = 'other';
                    break;
            }
            
            try {
                axios
                    .post(`${import.meta.env.VITE_API_BASE_URL}${url}`, {
                        item: addItem.input
                    })
                    .then((response) => {
                        const newList = JSON.parse(JSON.stringify(addItem.list))
                        
                        newList[url].push(response.data.listItem)

                        setAddItem({
                            input: '',
                            list: newList
                        });
                        if (!categories.includes(url)) {
                            setCategories([...categories, url])
                        }
                    })

            } catch (error) {
                console.log("Error adding item:", error)
            }

        }
    }

    function handleClick(event) {
        const deletedItemCat = event.target.id.match(/[a-z]/g).join('')
        try {
            axios
                .delete(`${import.meta.env.VITE_API_BASE_URL}${event.target.id}`)
                .then((response) => {
                    const newList = JSON.parse(JSON.stringify(addItem.list))
                    for (const items in newList) {
                        if (items === deletedItemCat) {
                            newList[items] = newList[items].filter((item) => {
                                if (item[`${items}_id`] !== response.data.deletedItem[`${items}_id`]) {
                                    return item
                                }
                            })
                            if (!newList[items].length) {
                                setCategories(categories.filter((category) => category !== items))
                            }
                        }
                    }
                    setAddItem({
                        input: '',
                        list: newList
                    })

                })
        } catch (error) {
            console.log("Error deleting item:", error)
        }
    }

    function handleDrop() {
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
            <List categories={[...new Set(categories)]} itemsList={addItem.list} handleClick={handleClick}/>
        </>
        )
}

export default AddItem