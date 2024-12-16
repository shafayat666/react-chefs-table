import PropTypes from 'prop-types';

const CurrentlyCooking = ({recipes}) => {
  // console.log(recipes)

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Currently Cooking</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Time</th>
              <th className="px-4 py-2 border-b text-left">Calories</th>
            </tr>
          </thead>

          <tbody>
            {
              recipes.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b text-gray-700">{item.recipe_name}</td>
                  <td className="px-4 py-2 border-b text-gray-700">{item.preparing_time} mins</td>
                  <td className="px-4 py-2 border-b text-gray-700">{item.calories} kcal</td>
                </tr>
              ))
            }
          </tbody>
          
          <tfoot>
            <tr className="font-semibold">
              <td className="px-4 py-2 border-t text-left">Recipes: {recipes.length}</td>
              <td className="px-4 py-2 border-t text-left">{recipes.reduce((total, recipe) => total + recipe.preparing_time, 0)} Mins</td>
              <td className="px-4 py-2 border-t text-left">{recipes.reduce((total, recipe) => total + recipe.calories, 0)} kcal</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {
  recipes: PropTypes.array
};

export default CurrentlyCooking;