import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" alt='described card' src={props.item.image_url}/>
            <div className="card--details">
                <p className="bold">{props.item.title}</p>
                <p>Category:</p>
                <p>{props.item.category}</p>
            </div>
            <p className="desc">{props.item.description}</p>
            <div className="card--btn">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    )
}