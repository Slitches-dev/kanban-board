import { FC } from 'react';
import { ICard, IColumn } from '../types';
import Card from './Card';

interface ColumnProps {
    column: IColumn;
    cards: ICard[];
}

const Column: FC<ColumnProps> = ({ column, cards }) => {
    const { title } = column;
    return (
        <div>
            <h3>{title}</h3>
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
};

export default Column;
