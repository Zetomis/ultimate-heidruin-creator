import CardWidget from "../components/CardWidget";
import useCard from "../hooks/useCard";
import { useEffect } from "react";

const Browse = () => {
    const { card, isLoading, error, getAllCard } = useCard();

    useEffect(() => {
        getAllCard();
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    } else {
        return (
            <div className="container grid grid-cols-2 gap-4">
                {card?.map((c) => (
                    <CardWidget card={c} key={c._id} />
                ))}
            </div>
        );
    }
};

export default Browse;
