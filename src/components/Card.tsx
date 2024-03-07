import { FC } from 'react';
import { ICard } from '../types';

const Card: FC<ICard> = ({ title }) => {
    return <div>{title}</div>;
};

export default Card;
