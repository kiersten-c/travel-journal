import React from "react"
import data from "./data"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.title}
                {...item} 
            />
        )
    })       
    
    return (
        <div className="container">
            <Header />
            {cards}
        </div>
    )
}