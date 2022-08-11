import { DragDropContext, Draggable, Droppable } from '@react-forked/dnd';
import React from 'react'
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './assets/css/prueba.scss'


const finalSpaceCharacters = [
    {
        id: 'gary',
        name: 'Gary Goodspeed',
        thumb: 'https://github.com/colbyfayock/my-final-space-characters/blob/part-0-starting-point/public/images/gary.png?raw=true'
    },
    {
        id: 'cato',
        name: 'Little Cato',
        thumb: 'https://github.com/colbyfayock/my-final-space-characters/blob/part-0-starting-point/public/images/cato.png?raw=true'
    },
    {
        id: 'kvn',
        name: 'KVN',
        thumb: 'https://github.com/colbyfayock/my-final-space-characters/blob/part-0-starting-point/public/images/kvn.png?raw=true'
    },
    {
        id: 'mooncake',
        name: 'Mooncake',
        thumb: 'https://github.com/colbyfayock/my-final-space-characters/blob/part-0-starting-point/public/images/mooncake.png?raw=true'
    },
    {
        id: 'quinn',
        name: 'Quinn Ergon',
        thumb: 'https://github.com/colbyfayock/my-final-space-characters/blob/part-0-starting-point/public/images/quinn.png?raw=true'
    }
]


export const UneLasCorrespondencias = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Final Space Characters</h1>
                <DragDropContext>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {finalSpaceCharacters.map(({ id, name, thumb }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="characters-thumb">
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </div>
                                                    <p>
                                                        {name}
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </div>
    );
}
