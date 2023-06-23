import { useEffect, useState } from "react";

const SetCostField = ({
    cost,
    setCost,
}: {
    cost: string[];
    setCost: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    const [aether, setAether] = useState(0);
    const [ignis, setIgnis] = useState(0);
    const [aqua, setAqua] = useState(0);
    const [aeris, setAeris] = useState(0);
    const [terra, setTerra] = useState(0);

    const [isDisable, setIsDisable] = useState(false);
    useEffect(() => {
        const newCost = [];
        for (let i = 1; i <= aether; i++) {
            newCost.push("aether");
        }
        for (let i = 1; i <= ignis; i++) {
            newCost.push("ignis");
        }
        for (let i = 1; i <= aqua; i++) {
            newCost.push("aqua");
        }
        for (let i = 1; i <= aeris; i++) {
            newCost.push("aeris");
        }
        for (let i = 1; i <= terra; i++) {
            newCost.push("terra");
        }

        if (newCost.length >= 10) {
            setIsDisable(true);
        } else {
            setIsDisable(false);
        }

        setCost(newCost);
    }, [aether, ignis, aqua, aeris, terra]);

    return (
        <div>
            <label className="mb-2 block">Set card's cost:</label>
            <div className="grid grid-cols-5 gap-x-4">
                <CostField
                    costType="Aether"
                    state={aether}
                    setState={setAether}
                    isDisable={isDisable}
                />
                <CostField
                    costType="Ignis"
                    state={ignis}
                    setState={setIgnis}
                    isDisable={isDisable}
                />
                <CostField
                    costType="Aqua"
                    state={aqua}
                    setState={setAqua}
                    isDisable={isDisable}
                />
                <CostField
                    costType="Aeris"
                    state={aeris}
                    setState={setAeris}
                    isDisable={isDisable}
                />
                <CostField
                    costType="Terra"
                    state={terra}
                    setState={setTerra}
                    isDisable={isDisable}
                />
            </div>
        </div>
    );
};

const CostField = ({
    costType,
    state,
    setState,
    isDisable,
}: {
    costType: string;
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    isDisable: boolean;
}) => {
    return (
        <div className="flex flex-col items-center gap-y-2">
            <button
                type="button"
                className="w-5 h-5 flex justify-center items-center bg-slate-200 rounded font-semibold"
                onClick={() => setState(state + 1)}
                disabled={state >= 10 || isDisable}
            >
                &uarr;
            </button>
            <span>
                {state} {costType}
            </span>
            <button
                type="button"
                className="w-5 h-5 flex justify-center items-center bg-slate-200 rounded font-semibold"
                onClick={() => setState(state - 1)}
                disabled={state <= 0}
            >
                &darr;
            </button>
        </div>
    );
};

export default SetCostField;

// This Code is bad
