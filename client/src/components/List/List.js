import React from 'react';
import { Droppable } from 'react-beautiful-dnd'


function List(props) {
    return (
        <Droppable droppableId={props.id}>
            {(provided, snapshot) => (
                <div className='vertical' {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {provided.placeholder}
                {props.children}
                </div>
            )}
        </Droppable>
    )
}

export default List;