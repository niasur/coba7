import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
