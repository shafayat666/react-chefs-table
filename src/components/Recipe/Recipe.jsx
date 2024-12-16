const Recipe = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 mx-auto mb-6">
      {/* Recipe Image */}
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="Recipe" 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        {/* Recipe Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">Delicious Recipe Name</h2>

        {/* Recipe Description */}
        <p className="text-gray-600 mb-4">
          This is a short description of the recipe. It&apos;s quick, easy, and perfect for any meal of the day.
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Ingredients:</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        {/* Preparation Time and Calories */}
        <div className="flex justify-between mb-4 text-gray-600">
          <span>Preparation Time: 30 mins</span>
          <span>Calories: 250 kcal</span>
        </div>

        {/* Want to Cook Button */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

export default Recipe;
