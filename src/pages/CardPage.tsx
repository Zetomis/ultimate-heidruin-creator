import { useParams } from "react-router-dom";
import useCard from "../hooks/useCard";
import { useEffect } from "react";
import Card from "../components/Card";
import CardInfo from "../components/CardInfo";

const CardPage = () => {
    const { id } = useParams();
    const { card, isLoading, getSingleCard } = useCard();

    useEffect(() => {
        if (id) {
            getSingleCard(id);
        }
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-2 gap-x-4">
                {card && <Card card={card[0]} />}
                {card && <CardInfo card={card[0]} />}
            </div>
        );
    }
};

export default CardPage;
