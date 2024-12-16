import PropTypes from "prop-types";

const WantToCook = ({ items }) => {
  console.log(items)

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Want to Cook</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Time</th>
              <th className="px-4 py-2 border-b text-left">Calories</th>
              <th className="px-4 py-2 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b text-gray-700">{item.recipe_name}</td>
                  <td className="px-4 py-2 border-b text-gray-700">{item.preparing_time} mins</td>
                  <td className="px-4 py-2 border-b text-gray-700">{item.calories} kcal</td>
                  <td className="px-4 py-2 border-b text-center">
                    <button className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition">
                      Preparing
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  items: PropTypes.array
}

export default WantToCook;