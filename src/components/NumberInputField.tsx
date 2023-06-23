const NumberInputField = ({
    id,
    labelText,
    setState,
}: {
    id: string;
    labelText: string;
    setState: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={id}>{labelText}</label>
            <input
                type="number"
                id={id}
                className="w-full border border-black rounded px-4 py-2"
                onChange={(e) => {
                    setState(Number(e.target.value));
                }}
                required
            />
        </div>
    );
};

export default NumberInputField;
