import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cardData } from "../../hooks/useCard";

export interface cardDeckInterface extends cardData {
    amount: number;
}

interface InitialInerface {
    cards: cardDeckInterface[];
}

const initialState: InitialInerface = {
    cards: [],
};

export const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        addCardToDeck: (
            state,
            action: PayloadAction<{ card: cardDeckInterface }>
        ) => {
            const existedCard = state.cards.find(
                (c) => c._id === action.payload.card._id
            );
            if (existedCard) {
                if (existedCard.amount < 4) {
                    existedCard.amount += 1;
                }
            } else {
                state.cards.push(action.payload.card);
            }
            localStorage.setItem("deck", JSON.stringify(state));
        },
        removeCardFromDeck: (state, action: PayloadAction<{ id: string }>) => {
            state.cards = state.cards.filter(
                (card) => card._id !== action.payload.id
            );
            localStorage.setItem("deck", JSON.stringify(state));
        },
        setDeck: (
            state,
            action: PayloadAction<{ cards: cardDeckInterface[] }>
        ) => {
            state.cards = action.payload.cards.map((item) => item);
        },
        increaseAmount: (state, action: PayloadAction<{ id: string }>) => {
            const existedCard = state.cards.find(
                (card) => card._id === action.payload.id
            );
            if (existedCard && existedCard.amount < 4) {
                existedCard.amount += 1;
            }
            localStorage.setItem("deck", JSON.stringify(state));
        },
        decreaseAmount: (state, action: PayloadAction<{ id: string }>) => {
            const existedCard = state.cards.find(
                (card) => card._id === action.payload.id
            );
            if (existedCard && existedCard.amount > 0) {
                existedCard.amount -= 1;
            }
            localStorage.setItem("deck", JSON.stringify(state));
        },
    },
});

export const {
    addCardToDeck,
    removeCardFromDeck,
    setDeck,
    increaseAmount,
    decreaseAmount,
} = deckSlice.actions;
export default deckSlice.reducer;
