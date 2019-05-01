import React from 'react';
import { Draggable } from 'react-beautiful-dnd'

function Item(props) {
    let itemStyle = {
        'width': '240px',
        'height': '264px'
    };
    let bankStyle = {
        'width': '6rem',
        'height': '27mm'
    };
    return (
        <React.Fragment>
            <Draggable key={props.id} draggableId={props.id} index={props.index}>
                {(provided, snapshot) => (
                    props.location === 'bank' ? (
                        <div className="col s3 m2">
                            <div className="card bankCard" style={bankStyle} ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}  >
                                <img src={require(`../../images/${props.image}`)} style={bankStyle} />
                            </div>
                        </div>
                    ) : (

                            <div className="card listCard" style={itemStyle} ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps} >
                                <img src={require(`../../images/${props.image}`)} style={itemStyle} />
                            </div>
                        ))
                }
            </Draggable >
        </React.Fragment>
    )
}

export default Item;