import React from "react"

export default function Card({id, image_url, title, category, description, cardData, setCardData}) {
    
    function handleDelete(id) {
        const newCardData = cardData.filter(lst => lst.id !== id)
        setCardData(newCardData)
        fetch(`/my_favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    return (
        <div className="card">
            <img className="card--image" alt='described card' src={image_url}/>
            <div className="card--details">
                <p className="bold">{title}</p>
                <p>Category:</p>
                <p>{category}</p>
            </div>
            <p className="desc">{description}</p>
            <div className="card--btn">
                <button className="btn">Edit</button>
                <button className="btn red" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}