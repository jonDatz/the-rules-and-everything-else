import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

function Item(props) {
    let itemStyle = {
        'width': '16rem',
        'height': '70mm'
    };
    let bankStyle = {
        'width': '6rem',
        'height': '27mm'
    };
    return (
        <Draggable key={props.id} draggableId={props.id} index={props.index}>
            {(provided, snapshot) => (
                props.location === 'bank' ? (
                    <div className="col s3 m2">
                        <div className="card-panel teal cardCharSheet" ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps} style={bankStyle}>
                            <span className="white-text">{props.content}</span>
                        </div>
                    </div>
                ) : (

                        <div className="card-panel teal cardCharSheet" ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps} style={itemStyle}>
                            <span className="white-text">{props.content}</span>
                        </div>
                    ))
            }
        </Draggable >
    )
}

export default Item;