import React from 'react'

export default function ListState() {
    return (
        <div>
            <Allitems />
            <Todo />
            <Done />
        </div>
    )
}
function Allitems() {
    return (
        <a onClick={() => this.everyItem()} className="card-link">The Forgotten & The Works</a>
    )
}

function Todo() {
    return (
        <a onClick={() => this.todoItem()} className="card-link">The Works!</a>
    )
}

function Done() {
    return (
        <a onClick={() => this.finishItem()} className="card-link">The Forgotten..</a>
    )
}
