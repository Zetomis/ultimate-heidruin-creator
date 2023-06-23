import AbilitySelector from "../components/AbilitySelector";
import NumberInputField from "../components/NumberInputField";
import OathSelector from "../components/OathSelector";
import SelectAttunement from "../components/SelectAttunement";
import SetCostField from "../components/SetCostField";
import TextInputField from "../components/TextInputField";
import { useEffect, useState } from "react";
import useCard, { cardData } from "../hooks/useCard";
import { useParams } from "react-router-dom";
import { CardInterface } from "../utils/interfaces";

const CreateCreature = ({ edit }: { edit?: boolean }) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [attunement, setAttunement] = useState("");
    const [race, setRace] = useState("");
    const [sacrifice, setSacrifice] = useState(0);
    const [cost, setCost] = useState<string[]>([]);
    const [imageURL, setImageURL] = useState("");
    const [oath, setOath] = useState<string[]>([]);
    const [ability, setAbility] = useState<string[]>([]);
    const [POW, setPOW] = useState(0);
    const [DUR, setDUR] = useState(0);

    const { addCard, editCard } = useCard();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard: CardInterface = {
            type: "CreatureCard",
            name: name,
            attunement: attunement,
            cost: cost,
            race: race,
            sacrifice: sacrifice,
            imageURL: imageURL,
            oath: oath,
            requirement: "",
            ability: ability,
            POW: POW,
            DUR: DUR,
        };

        console.log(edit, id);
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
                    {edit ? "Edit Creature" : "Create Creature"}
                </h1>
                <TextInputField
                    id="name"
                    labelText="Enter creature's name:"
                    setState={setName}
                />
                <SelectAttunement setState={setAttunement} />
                <TextInputField
                    id="race"
                    labelText="Enter creature's race:"
                    setState={setRace}
                />
                <NumberInputField
                    id="sacrifice"
                    labelText="Enter creature's sacrifice:"
                    setState={setSacrifice}
                />
                <SetCostField cost={cost} setCost={setCost} />
                <TextInputField
                    id="imageURL"
                    labelText="Enter creature's imageURL:"
                    setState={setImageURL}
                />
                {/* Oath Here... */}
                <OathSelector oath={oath} setOath={setOath} />
                {/* Set Ability Here... */}
                <AbilitySelector ability={ability} setAbility={setAbility} />
                <NumberInputField
                    id="POW"
                    labelText="Enter creature's POW:"
                    setState={setPOW}
                />
                <NumberInputField
                    id="DUR"
                    labelText="Enter creature's DUR:"
                    setState={setDUR}
                />
                <button className="px-4 py-2 border border-black rounded font-semibold">
                    Create Card
                </button>
            </form>
        </div>
    );
};

export default CreateCreature;
