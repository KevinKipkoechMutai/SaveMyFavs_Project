import React, { useEffect } from "react"
//import Card from "./Card"

export default function MyFavorites() {
   //const [cardData, setCardData] = React.useState([])
   useEffect(() => {
    fetch('/my_favorites')
    .then(res => res.json())
    .then(data => console.log(data))
   }, [])

   
    return (
        <div className="my-favs">
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <button className="btn">Create New Fav</button>
            </div>
            <div className="cards-section">
                    
            </div>
        </div>
    )
}