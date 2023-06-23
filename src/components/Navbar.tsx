import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 py-4 px-6 bg-white flex justify-between items-center border-b border-black">
            <h1 className="font-bold text-xl">Ultimate Heidruin Creator</h1>
            <div className="flex gap-x-4 font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/browse"}>Browse</Link>
                <Link to={"/create"}>Create</Link>
                <Link to={"/deck"}>Deck</Link>
            </div>
        </div>
    );
};

export default Navbar;
