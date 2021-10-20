import React from 'react'
import ListState from './ListState.js'
import Input from './Input.js'
function Page() {
    return (
        <div>
            <Card />
        </div>
    )
}

function Card() {
    return (
        <div className="card m-5" style={cardSize}>
            <div className="card-body">
                <h2 className="card-title">What's ToDO? Dog..</h2>
                <Input />
                <ListState />
            </div>
        </div>
    )
}

const cardSize = { width: "18rem;" }
export default Page
