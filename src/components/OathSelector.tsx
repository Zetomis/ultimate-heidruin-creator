const OathSelector = ({
    oath,
    setOath,
}: {
    oath: string[];
    setOath: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
    return (
        <div>
            <label className="block mb-2">Select creature's oath(s):</label>
            <div className="flex flex-col gap-y-2 mb-2">
                {oath.map((oth, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <input
                            className="border border-black rounded py-1 w-64 px-2"
                            type="text"
                            onChange={(e) => {
                                const value = e.target.value;
                                const newOath = [...oath];
                                newOath[index] = value;
                                setOath(newOath);
                            }}
                            value={oth}
                        />
                        <button
                            className="w-8 h-8 bg-slate-200 rounded"
                            type="button"
                            onClick={() => {
                                const newOath = [...oath];
                                newOath.splice(index, 1);
                                setOath(newOath);
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
                    setOath([...oath, ""]);
                }}
            >
                Add new oath
            </button>
        </div>
    );
};

export default OathSelector;
