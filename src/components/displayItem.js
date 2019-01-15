import React from 'react';

export default class DisplayItem extends React.Component {
constructor() {
    super()
    this.state={editing: false}
}    

handleEditing = event => {
    this.setState({
        editing: true,
        changedText: this.props.todo.title
    })
}

handleEditingDone = event => {
    if (event.keyCode === 13) {
        this.setState({editing: false})
    } else if (event.keyCode === 27) {
        this.setState({editing: false})
    }
}

handleEditingChange = event => {
    var _changedText = event.target.value
    this.setState({ changedText: _changedText})
}

componentDidMount ()  {
    this.setState({ changedText: this.props.todo.title})
}
    render() {
        var todo = this.props.todo
        var editStyle = {}
        var viewStyle = {}

        if (this.state.editing) {
            viewStyle.display = "none"
        } else {
            editStyle.display = "none"
        }
        return <li style={{listStyle: "none",
                    textDecoration: this.props.todo.done ? "line-through" : "",
                }}>
                    {/*   onDoubleClick={this.handleEditing} */}
                    <div style={viewStyle}>
                        <input type="checkbox"
                            checked={todo.done}
                            onChange={this.props.handleDone.bind(null, todo.id)}
                        />
                        {this.state.changedText}
                        <button onClick={this.props.handleDelete.bind(null, todo.id)}>X</button>
                        <button onClick={this.handleEditing}>E</button>
                    </div>                    
                    <input type="text"
                        onKeyDown={this.handleEditingDone}
                        onChange={this.handleEditingChange}
                        style={editStyle}
                        value={this.state.changedText} />
                </li>
    }
}