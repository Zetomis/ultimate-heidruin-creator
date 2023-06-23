import { Link, useNavigate } from "react-router-dom";
import useCard, { cardData } from "../hooks/useCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addCardToDeck, cardDeckInterface } from "../redux/features/deckSlice";

const CardInfo = ({ card }: { card: cardData }) => {
    const { deleteCard } = useCard();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const deck = useAppSelector((state) => state.deck);

    const handleClick = async () => {
        deleteCard(card._id);
        navigate("/browse");
    };

    const handleEdit = () => {
        if (card.type === "CreatureCard") {
            navigate(`/creature/edit/${card._id}`);
        } else if (card.type === "MantraCard") {
            navigate(`/mantra/edit/${card._id}`);
        } else if (card.type === "BlessingCard") {
            navigate(`/blessing/edit/${card._id}`);
        } else if (card.type === "DomainCard") {
            navigate(`/domain/edit/${card._id}`);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl mb-4">{card.name}</h1>
                <button
                    className="px-4 py-2 border border-green-700 rounded text-green-700"
                    onClick={handleEdit}
                >
                    Edit
                </button>
            </div>
            <span className="block font-semibold text-sm mb-2">
                {card.type}
            </span>
            <h4>Attunement: {card.attunement}</h4>
            <h4>
                Cost:{" "}
                {card.cost.map((c, index) => (
                    <span key={index}>{c} </span>
                ))}
            </h4>
            {card.race && <h4>Race: {card.race}</h4>}
            {card.sacrifice !== 0 && <h4>Sacrifice: {card.sacrifice}</h4>}
            {card.oath[0] && (
                <h4>
                    Oath:{" "}
                    {card.oath.map((o, index) => (
                        <span key={index}>{o} </span>
                    ))}
                </h4>
            )}
            {card.requirement && <h4>Requirement: {card.requirement}</h4>}
            <h4>Ability: {card.ability}</h4>
            {card.type === "CreatureCard" && <h4>POW: {card.POW}</h4>}
            {card.type === "CreatureCard" && <h4>DUR: {card.DUR}</h4>}
            <button
                className="px-4 py-2 border border-blue-700 rounded text-blue-700 mt-4 block mb-2"
                onClick={() => {
                    const newCard: cardDeckInterface = { ...card, amount: 1 };
                    dispatch(addCardToDeck({ card: newCard }));
                }}
            >
                Add Card to Deck
            </button>
            <button
                className="px-4 py-2 border border-red-700 rounded text-red-700 mt-4"
                onClick={handleClick}
            >
                Delete Card
            </button>
        </div>
    );
};

export default CardInfo;
