import React from "react"

export default function MyFavorites() {
    return (
        <div className="my-favs">
            <hr/>
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <button className="btn">Create New Fav</button>
                <div className="cards-section"></div>
            </div>
        </div>
    )
}