import { cardData } from "../hooks/useCard";

const Card = ({ card }: { card: cardData }) => {
    return (
        <div className="card">
            <div className="border-b-8 border-black flex h-8">
                <div className="flex-1 border-r-4 border-black">
                    <h1>{card.name}</h1>
                </div>
                <div className="w-8 border-l-4 border-black overflow-hidden">
                    <span>{card.attunement}</span>
                </div>
            </div>
            <div className="w-full h-48 flex justify-center items-center">
                <img
                    src={card.imageURL}
                    alt="creature's image"
                    className="h-full w-auto object-cover"
                />
            </div>
            <div>
                <span>{card.ability}</span>
            </div>
        </div>
    );
};

export default Card;
