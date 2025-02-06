import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">MyApp</h1>
            <ul className="flex gap-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/counter" className="hover:underline">Counter</Link></li>
                <li><Link to="/fetch-data" className="hover:underline">Fetch Data</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
