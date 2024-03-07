import { FC, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Column from './Column';
import { addColumn } from '../store/boardsSlice';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

const Board: FC = () => {
    const columns = useAppSelector((state) => state.boards.columns);
    const cards = useAppSelector((state) => state.boards.cards);
    const dispatch = useAppDispatch();

    const columnsIds = useMemo(
        () => columns.map((column) => column.id),
        [columns]
    );

    const handleDragEnd = (event: DragEndEvent): void => {
        const { active, over } = event;
        if (!over) return;

        if (active.id === over.id) return;
    };

    return (
        <div className="flex justify-center gap-4">
            <DndContext
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={columnsIds}>
                    {columns.map((column) => (
                        <Column
                            key={column.id}
                            column={column}
                            cards={cards.filter(
                                (card) => card.columnId === column.id
                            )}
                        />
                    ))}
                    <button
                        onClick={() =>
                            dispatch(
                                addColumn({
                                    id: Date.now().toString(),
                                    title: 'new',
                                })
                            )
                        }
                    >
                        Добавить колонку
                    </button>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default Board;
