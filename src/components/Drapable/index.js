import React from 'react';
import PropTypes from 'prop-types';

export default class Drapable extends React.Component {
    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
        console.log(e.target.id)

    }
    noAllowDrop = (e) => {
        e.stopPropagation();
    }
    render() {
        return (
            <div id={this.props.id} draggable='true' onDragStart={this.drag} onDragOver={this.noAllowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

Drapable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}
