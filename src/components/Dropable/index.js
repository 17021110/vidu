import React from 'react'
import PropTypes from 'prop-types';
export default class Dropable extends React.Component {
    drop = (e) => {
        // e.prevenDefault();
        const data = e.dataTransfer.getData('transfer');

        e.target.appendChild(document.getElementById(data));
        console.log(document.getElementById(data))
        console.log(data)

    }
    allowDrop = (e) => {
        e.preventDefault();

    };
    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
Dropable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}