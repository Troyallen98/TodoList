import React from 'react'
// import ListState from './ListState.js'
class Input extends React.Component {
    constructor(props, currentListItem) {
        super(props);

        this.state = {
            list:[],
            currentListItem: ''
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    addItem() {
        const currentListItem = {
            key: Date.now(),
            value: {
                id: this.state.currentListItem,
                status: 'active'
            }
        };
        const list = [...this.state.list];

        list.push(currentListItem);

        localStorage.setItem(currentListItem.key, JSON.stringify(currentListItem.value));

        this.setState({
            list,
            currentListItem: ''
        });
    };

    removeItem(key) {
        const list = [...this.state.list];
        const removeListItem = list.filter(item => item.key !== key);
        this.setState({
            list: removeListItem
        });
        localStorage.removeItem(key);
    }
    removeAll(key) {
        this.setState({
            list: []
        });
        localStorage.clear(key);
    }

    // completeAll() {
    //     localStorage.getItem(JSON.parse('value'))
    // }
    componentDidMount() {
        const pastlife = window.localStorage.getItem("currentListItem.value")
        if (pastlife) {
            this.setState({
                    list: pastlife
            })
        }
    }


    render() {
        return (
            <div>
                <input
                    className="input
                    type='text'
                    value={this.state.currentListItem}
                    onChange={e => this.updateInput('currentListItem', e.target.value)}
                    placeholder='add Todo...'
                />
                
                <button
                    className="inputBtn"
                onClick={() => this.addItem()}
                >
                    Add Todo
                </button>
                <ul className="list-container">
                    {this.state.list.map((item, index) => {
                        return (
                            <li className="listItem" key={index}>
                                {item.value.id}
                                <button
                                     onClick={() => this.removeItem(item.key)}
                                    data-key={index}
                                    className="deleteBtn">Remove</button>

                            </li>)
                    })}
                </ul>
                {/* <button onClick={() => this.completeAll()}
                    className="completeAll">All Done!
                </button> */}

                {/* <button onClick={() => this.everyItem()} className="stateBtn">The Forgotten & The Works</button> */}
                {/* <button onClick={() => this.todoItem()} className="stateBtn">The Works!</button> */}
                {/* <button onClick={() => this.finishItem()} className="stateBtn">The Forgotten..</button> */}

                <button onClick={() => this.removeAll()}
                    className="deleteAllBtn">Remove
                </button>
            </div>
        )
    }
}


export default Input;

// on click i need to get item by key then parse the object and toggle the boolean from false to true.


//Link 1
//have boolean values of true and false... forgotten and works === list

//link 2
// have boolean values of only true... forgotten == list 2

//link 3
//have boolean values of only false... works == list 3