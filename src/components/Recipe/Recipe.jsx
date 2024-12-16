import PropTypes from 'prop-types';

const Recipe = ({recipe, handleClick}) => {

  const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
  const buttonId = 0;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 mx-auto mb-6">
      {/* Recipe Image */}
      <img 
        src={recipe_image} 
        alt="Recipe" 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        {/* Recipe Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe_name}</h2>

        {/* Recipe Description */}
        <p className="text-gray-600 mb-4">
          {short_description}
        </p>

        {/* Ingredients */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Ingredients:</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {
              ingredients.map((item, index) =>{<li key={index}>{item}</li>})
            }
          </ul>
        </div>

        {/* Preparation Time and Calories */}
        <div className="flex justify-between mb-4 text-gray-600">
          <span>Preparation Time: {preparing_time} mins</span>
          <span>Calories: {calories} kcal</span>
        </div>

        {/* Want to Cook Button */}
        <button onClick={() => handleClick(recipe, buttonId)}className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
          Want to Cook
        </button>
      </div>
    </div>
  );
}
  
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleClick: PropTypes.func
};

export default Recipe;
