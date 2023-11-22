import './List.css'

function List({ categories, itemsList, handleClick}) {
    if (!itemsList) return <></>

    return (
        <>
            <h2>List of Items:</h2>
            
            <ul id='title-list'>
                {categories.map((category) => {

                    let formattedCat = ''
                                                
                    switch (category) {
                        case 'fruitveg':
                            formattedCat = 'Fruit and Veg'
                            break;
                        case 'meat':
                            formattedCat = 'Meat and Fish'
                            break;
                        case 'essentials':
                            formattedCat = 'Essential Items'
                            break;
                        case 'drinks':
                            formattedCat = 'Drinks'
                            break;
                        case 'other':
                            formattedCat = 'Other Items'
                            break;
                    }

                    return <li key={category} className='list-title'>
                                <h3>{formattedCat}</h3>
                                <ul className='item-list'>
                                    {itemsList.hasOwnProperty(category) ? itemsList[category].map((item) => {
                                        return <li key={`${category}/${item[`${category}_id`]}`} className="list-item">
                                        <button onClick={handleClick} className="list-button" id={`${category}/${item[`${category}_id`]}`}>
                                            {item[`${category}_name`]}
                                        </button>
                                    </li> 
                                    }) : console.log("no items")}
                                </ul>
                            </li>
                })}
            
            </ul>
        </>
    )
}

export default List