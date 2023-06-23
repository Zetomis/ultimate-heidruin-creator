const AbilitySelector = ({
    ability,
    setAbility,
}: {
    ability: string[];
    setAbility: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    return (
        <div>
            <label className="block mb-2">Select card's ability(s):</label>
            <div className="flex flex-col gap-y-2 mb-2">
                {ability.map((abi, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <input
                            className="border border-black rounded py-1 w-64 px-2"
                            type="text"
                            onChange={(e) => {
                                const value = e.target.value;
                                const newAbility = [...ability];
                                newAbility[index] = value;
                                setAbility(newAbility);
                            }}
                            value={abi}
                        />
                        <button
                            className="w-8 h-8 bg-slate-200 rounded"
                            type="button"
                            onClick={() => {
                                const newAbility = [...ability];
                                newAbility.splice(index, 1);
                                setAbility(newAbility);
                            }}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="w-full py-2 border rounded border-black"
                onClick={() => {
                    setAbility([...ability, ""]);
                }}
            >
                Add new ability
            </button>
        </div>
    );
};

export default AbilitySelector;
