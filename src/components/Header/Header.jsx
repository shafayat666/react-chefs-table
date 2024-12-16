import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold">Recipe Calories</h1>
      <ul className="flex space-x-8 text-lg">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <div className="flex items-center border border-gray-300 p-2 rounded-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          className="outline-none"
          placeholder="Search recipes..."
        />
        <FaUser className="text-gray-500 ml-2" />
      </div>
    </div>
  );
};

export default Header;