import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

function Bank(props) {
    return (
        <Droppable droppableId={props.id} direction='horizontal'>
            {(provided, snapshot) => (
                <div className='container-fluid' {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {provided.placeholder}
                    <div className='row'>
                        {props.children}
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default Bank;