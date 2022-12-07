import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" alt='described card' src={props.image_url}/>
            <div className="card--details">
                <p className="bold">{props.title}</p>
                <p>Category:</p>
                <p>{props.category}</p>
            </div>
            <p className="desc">{props.description}</p>
            <div className="card--btn">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    )
}