import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
    decreaseAmount,
    increaseAmount,
    removeCardFromDeck,
    setDeck,
} from "../redux/features/deckSlice";
import { Link } from "react-router-dom";

const Deck = () => {
    const deck = useAppSelector((state) => state.deck);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const storedDeck = localStorage.getItem("deck");
        const newDeck = storedDeck ? JSON.parse(storedDeck) : [];
        dispatch(setDeck(newDeck));
    }, []);

    return (
        <div className="flex flex-col gap-y-4">
            {deck.cards.map((card) => (
                <div
                    className="px-4 py-2 border border-black rounded flex gap-x-4 items-center"
                    key={card._id}
                >
                    <div className="w-16 h-16 border border-black rounded overflow-hidden">
                        <img
                            className="object-cover"
                            src={`${card.imageURL}`}
                            alt="Creature's image"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="font-bold truncate">{card.name}</h1>
                        <span className="font-semibold text-sm">
                            Amount: {card.amount}
                        </span>
                    </div>
                    <div className="flex gap-x-4">
                        <button
                            className="w-8 h-8 border border-black rounded flex justify-center items-center"
                            onClick={() => {
                                if (card.amount === 1) {
                                    dispatch(
                                        removeCardFromDeck({ id: card._id })
                                    );
                                } else {
                                    dispatch(decreaseAmount({ id: card._id }));
                                }
                            }}
                        >
                            &darr;
                        </button>
                        <button
                            className="w-8 h-8 border border-black rounded flex justify-center items-center"
                            onClick={() => {
                                dispatch(increaseAmount({ id: card._id }));
                            }}
                        >
                            &uarr;
                        </button>
                    </div>
                </div>
            ))}
            <Link
                className="w-full border border-black rounded py-2 text-center font-semibold"
                to="/print"
            >
                Print Deck
            </Link>
        </div>
    );
};

export default Deck;
