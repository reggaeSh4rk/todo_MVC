import React from 'react';
import DisplayItem from './displayItem';

export default class DisplayList extends React.Component {
    render() {
        return <div>
            {this.props.todos.map((todo, i) => {
               return <DisplayItem 
                    key={todo.id} 
                    handleDone={this.props.handleDone}
                    handleDelete = {this.props.handleDelete.bind(null, todo.id)}
                    todo={todo}/>
            })}
        </div>
    }
}
