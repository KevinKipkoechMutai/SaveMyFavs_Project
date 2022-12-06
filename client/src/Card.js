import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img className="card--image" alt='described card' src='https://www.cnet.com/a/img/resize/c22eba87138f2e56b7e9eae4753d27f691237eac/hub/2021/06/07/6b177b45-f084-4430-81c3-ade3e51abdc8/ogi1-2021-porsche-cayenne-gts-015.jpg?auto=webp&fit=crop&height=1200&width=1200'/>
            <div className="card--details">
                <p className="bold">Porsche Cayenne</p>
                <p>In:</p>
                <p>Cars</p>
            </div>
            <p className="desc">Luxurious vehicle developed in Germany and France</p>
            <div className="card--btn">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    )
}