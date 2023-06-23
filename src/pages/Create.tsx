import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [cardType, setCardType] = useState("creature");
    const navigate = useNavigate();

    return (
        <div className="px-8 py-4 border border-black rounded flex gap-y-4 flex-col">
            <label className="block font-semibold" htmlFor="type">
                Select card type:
            </label>
            <select
                className="px-4 py-2 border border-black rounded cursor-pointer"
                id="type"
                onChange={(e) => setCardType(e.target.value)}
                defaultValue={"creature"}
            >
                <option value="creature">Creature Card</option>
                <option value="mantra">Mantra Card</option>
                <option value="blessing">Blessing Card</option>
                <option value="domain">Domain Card</option>
            </select>
            <button
                className="block cursor-pointer px-4 py-2 border border-black rounded"
                onClick={() => {
                    navigate("/" + cardType);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Create;
