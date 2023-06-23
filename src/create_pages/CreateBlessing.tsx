import { useState } from "react";
import TextInputField from "../components/TextInputField";
import SelectAttunement from "../components/SelectAttunement";
import SetCostField from "../components/SetCostField";
import AbilitySelector from "../components/AbilitySelector";
import useCard from "../hooks/useCard";
import { CardInterface } from "../utils/interfaces";
import { useParams } from "react-router-dom";

const CreateBlessing = ({ edit }: { edit?: boolean }) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [attunement, setAttunement] = useState("");
    const [cost, setCost] = useState<string[]>([]);
    const [imageURL, setImageURL] = useState("");
    const [requirement, setRequirement] = useState("");
    const [ability, setAbility] = useState<string[]>([]);

    const { addCard, editCard } = useCard();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard: CardInterface = {
            type: "BlessingCard",
            name: name,
            attunement: attunement,
            cost: cost,
            race: "",
            sacrifice: 0,
            imageURL: imageURL,
            oath: [],
            requirement: requirement,
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
                    {edit ? "Edit Blessing" : "Create Blessing"}
                </h1>
                <TextInputField
                    id="name"
                    labelText="Enter blessing's name:"
                    setState={setName}
                />
                <SelectAttunement setState={setAttunement} />
                <SetCostField cost={cost} setCost={setCost} />
                <TextInputField
                    id="imageURL"
                    labelText="Enter blessing's imageURL:"
                    setState={setImageURL}
                />
                <TextInputField
                    id="requirement"
                    labelText="Enter blessing's requirement:"
                    setState={setRequirement}
                />
                <AbilitySelector ability={ability} setAbility={setAbility} />
                <button className="px-4 py-2 border border-black rounded font-semibold">
                    Create Card
                </button>
            </form>
        </div>
    );
};

export default CreateBlessing;
