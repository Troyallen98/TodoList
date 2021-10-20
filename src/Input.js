import React from 'react'
class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            currentListItem: '',
        }
    }

    updateInput(key, value, ) {
        this.setState({
            [key]: value,
        });
    }

    componentDidMount() {
        const currentListItem = {
            key: Date.now(),
            value: {
                id: this.state.currentListItem,
                status: false
            }
        };
        const list = [...this.state.list];

        list.push(currentListItem);
            localStorage.setItem(JSON.stringify(currentListItem.key), JSON.stringify(currentListItem.value));
        this.setState({
            list,
            currentListItem: ''
        });
    };
    removeItem(key) {
        const list = [...this.state.list];
        const removeListItem = list.filter(item => item.value.id !== key);
        this.setState({
            list: removeListItem
        });
    }

    
    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.currentListItem}
                    onChange={e => this.updateInput('currentListItem', e.target.value)}
                    placeholder='add Todo...'
                />
                <button
                    onClick={() => this.componentDidMount()}>
                    Add Todo
                </button>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (
                            <li>
                            {item.value.id}
                            <button onClick={() => this.removeItem(item.value.id)} data-key={index}>Remove</button>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Input;