import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

function Item(props) {
    let style = {
        'width': '18rem'
    };
    return (
        <Draggable key={props.id} draggableId={props.id} index={props.index}>
            {(provided, snapshot) => (
                props.location === 'bank' ? (
                    <div className="col s3 m2">
                        <div className="card-panel teal" ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}>
                            <span className="white-text">{props.content}</span>
                        </div>
                    </div>
                ) : (

                        <div className="card-panel teal" ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}>
                            <span className="white-text">{props.content}</span>
                        </div>
                    ))
            }
        </Draggable >
    )
}

export default Item;