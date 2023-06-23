import { Link } from "react-router-dom";
import { cardData } from "../hooks/useCard";

const CardWidget = ({ card }: { card: cardData }) => {
    return (
        <Link
            to={`/card/${card._id}`}
            className="w-full py-2 truncate border border-black rounded px-2 cursor-pointer"
        >
            <h1 className="font-bold text-xl mb-2">{card.name}</h1>
            <span className="block font-semibold">{card.type}</span>
        </Link>
    );
};

export default CardWidget;
