const InputField = ({
    id,
    labelText,
    setState,
}: {
    id: string;
    labelText: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={id}>{labelText}</label>
            <input
                type="text"
                id={id}
                className="w-full border border-black rounded px-4 py-2"
                onChange={(e) => {
                    setState(e.target.value);
                }}
                required
            />
        </div>
    );
};

export default InputField;
