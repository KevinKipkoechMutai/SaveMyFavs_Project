import React from "react"
import Card from "./Card"

export default function MyFavorites() {
    return (
        <div className="my-favs">
            <hr/>
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <button className="btn">Create New Fav</button>
            </div>
            <div className="cards-section">
                    <Card />
            </div>
        </div>
    )
}