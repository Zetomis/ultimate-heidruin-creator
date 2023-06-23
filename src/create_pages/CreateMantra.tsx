import { useState } from "react";
import TextInputField from "../components/TextInputField";
import SelectAttunement from "../components/SelectAttunement";
import SetCostField from "../components/SetCostField";
import AbilitySelector from "../components/AbilitySelector";
import useCard from "../hooks/useCard";
import { useParams } from "react-router-dom";
import { CardInterface } from "../utils/interfaces";

const CreateMantra = ({ edit }: { edit?: boolean }) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [attunement, setAttunement] = useState("");
    const [cost, setCost] = useState<string[]>([]);
    const [imageURL, setImageURL] = useState("");
    const [ability, setAbility] = useState<string[]>([]);

    const { addCard, editCard } = useCard();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard: CardInterface = {
            type: "MantraCard",
            name: name,
            attunement: attunement,
            cost: cost,
            race: "",
            sacrifice: 0,
            imageURL: imageURL,
            oath: [],
            requirement: "",
            ability: ability,
            POW: 0,
            DUR: 0,
        };
        if (edit && id) {
            editCard(id, newCard);
        } else {
            addCard(newCard);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="form__heading">
                    {edit ? "Edit Mantra" : "Create Mantra"}
                </h1>
                <TextInputField
                    id="name"
                    labelText="Enter mantra's name:"
                    setState={setName}
                />
                <SelectAttunement setState={setAttunement} />
                <SetCostField cost={cost} setCost={setCost} />
                <TextInputField
                    id="imageURL"
                    labelText="Enter mantra's imageURL:"
                    setState={setImageURL}
                />
                <AbilitySelector ability={ability} setAbility={setAbility} />
                <button className="px-4 py-2 border border-black rounded font-semibold">
                    Create Card
                </button>
            </form>
        </div>
    );
};

export default CreateMantra;
