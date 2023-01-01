import React from "react"
import data from "../data"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} className="card--image" />
            <div className="card--info">
                <div className="card--location">
                    <img src="../image/location.png" className="location--img" />
                    <h2 className="location--title">{props.location}</h2>
                    <a href={props.googleMapsUrl} className="location--map">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--dates">{props.startDate} - {props.endDate}</h3>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}