import Card from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { ReactElement, useEffect, useState } from "react";

const PrintPage = () => {
    const deck = useAppSelector((state) => state.deck.cards);

    const getPage = () => {
        const page: ReactElement[] = [];
        deck.forEach((card) => {
            for (let i = 1; i <= card.amount; i++) {
                page.push(
                    <div className="card__wrapper bg-slate-200 flex justify-center items-center">
                        <Card card={card} />
                    </div>
                );
            }
        });
        return page;
    };

    return <div className="a4">{getPage()}</div>;
};

export default PrintPage;
