import './List.css'
import {useState} from 'react'

function List({ newItem, items, handleClick}) {
    const [categories, setCategories] = useState([])

    if (!newItem.length) return <></>

    if (!categories.includes(newItem[0])) {
        setCategories([...categories, newItem[0]])
    }

    return (
        <>
            <h2>List of Items:</h2>
            
            <ul id='title-list'>
                {categories.map((category) => {
                    return <li key={category} className='list-title'>
                                <h3>{category}</h3>
                                <ul className='item-list'>
                                    {items.map((item) => {
                                        if (item[0] === category) {
                                            return <li key={item[1]} className="list-item">
                                                <button onClick={handleClick} className="list-button">
                                                    {item[1]}
                                                </button>
                                            </li> 
                                        }
                                    })}
                                </ul>
                            </li>
                })}
            
            </ul>
        </>
    )
}

export default List