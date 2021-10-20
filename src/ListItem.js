import React from 'react'

export default function ListItem() {
    return (
        <div>
            {
                this.state.list.map((item, index) => {
                    return <li>{item.value.id}
                        <button onClick={() => this.removeItem(item.value.id)}>Remove</button></li>
                })
            }
        </div>
    )
}


