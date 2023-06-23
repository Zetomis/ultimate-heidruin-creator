import { useEffect } from "react";

const SelectAttunement = ({
    setState,
}: {
    setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
    useEffect(() => {
        setState("aether");
    }, []);

    return (
        <div className="flex gap-y-2 flex-col">
            <label className="block font-semibold" htmlFor="type">
                Select card's attunement:
            </label>
            <select
                className="px-4 py-2 border border-black rounded cursor-pointer"
                id="type"
                onChange={(e) => setState(e.target.value)}
            >
                <option value="aether">Aether</option>
                <option value="ignis">Ignis</option>
                <option value="aqua">Aqua</option>
                <option value="aeris">Aeris</option>
                <option value="terra">Terra</option>
            </select>
        </div>
    );
};

export default SelectAttunement;
