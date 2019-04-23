import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import './List.css';


function List(props) {
    return (
        <Droppable droppableId={props.id}>
            {(provided, snapshot) => (
                <div className='list' {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {provided.placeholder}
                {props.children}
                </div>
            )}
        </Droppable>
    )
}

export default List;