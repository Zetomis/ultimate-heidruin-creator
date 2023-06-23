import { useState } from "react";
import { CardInterface } from "../utils/interfaces";

export interface cardData extends CardInterface {
    createdAt: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

const useCard = () => {
    const [card, setCard] = useState<cardData[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const addCard = async (card: CardInterface) => {
        const response = await fetch("http://localhost:3001/card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
        });
    };

    const getAllCard = async () => {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/card");
        const data = await response.json();

        setCard(data);
        setIsLoading(false);
    };

    const getSingleCard = async (id: string) => {
        setIsLoading(true);
        const reponse = await fetch(`http://localhost:3001/card/${id}`);
        const data = await reponse.json();

        setCard([data]);
        setIsLoading(false);
    };

    const deleteCard = async (id: string) => {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3001/card/${id}`, {
            method: "DELETE",
        });

        setIsLoading(false);
    };

    const editCard = async (id: string, card: CardInterface) => {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3001/card/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(card),
        });

        setIsLoading(false);
    };

    return {
        card,
        isLoading,
        error,
        getAllCard,
        addCard,
        getSingleCard,
        deleteCard,
        editCard,
    };
};

export default useCard;
