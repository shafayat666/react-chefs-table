import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";

const Recipes = () => {
  return (
    <div className="p-6 mx-auto bg-white shadow-lg rounded-lg">
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Recipes</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover a variety of delicious recipes that are easy to make, fun to cook, and perfect for any occasion.
          Whether you&apos;re looking for quick meals, special dishes, or healthy options, we have something for everyone.
        </p>
      </div>
      <div className="flex space-x-6 mt-6">
        <div className="w-1/2 p-4 ">
          <div className="grid grid-cols-2 gap-6">
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
