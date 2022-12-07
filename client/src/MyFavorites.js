import React from "react"
import Card from "./Card"

export default function MyFavorites() {
    const [cardData, setCardData] = React.useState([])

    React.useEffect(() => {
        fetch('/my_favorites')
        .then(res => res.json())
        .then(data => setCardData(data))
      }, [])

    console.log(cardData)
    const cardInfo = Array.from(cardData).map((item) => {
        return (
            <Card 
                key = {item.id}
                {...item}
                cardData = {cardData}
                setCardData = {setCardData}
            />
        )
    })

    return (
        <div className="my-favs">
            <div className="my-favs-header">
                <h1>My Favorites</h1>
                <button className="btn">Add New Fav</button>
            </div>
            <div className="cards--section">
                    {cardInfo}
            </div>
        </div>
    )
}