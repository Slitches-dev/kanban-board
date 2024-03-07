import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard, IColumn } from '../types';

interface BoardsState {
    columns: IColumn[];
    cards: ICard[];
}

const initialState: BoardsState = {
    columns: [
        { id: '1', title: 'Нужно сделать' },
        { id: '2', title: 'В процессе' },
        { id: '3', title: 'Готово' },
    ],
    cards: [],
};

const boardsSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addColumn(state, action: PayloadAction<IColumn>) {
            state.columns = [...state.columns, action.payload];
        },
    },
});

export const { addColumn } = boardsSlice.actions;
export default boardsSlice.reducer;
