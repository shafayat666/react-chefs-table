const SideBar = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      {/* Want to Cook Table */}
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
            <tr>
              <td className="px-4 py-2 border-b text-gray-700">Recipe 1</td>
              <td className="px-4 py-2 border-b text-gray-700">30 mins</td>
              <td className="px-4 py-2 border-b text-gray-700">250 kcal</td>
              <td className="px-4 py-2 border-b text-center">
                <button className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition">
                  Preparing
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b text-gray-700">Recipe 2</td>
              <td className="px-4 py-2 border-b text-gray-700">45 mins</td>
              <td className="px-4 py-2 border-b text-gray-700">350 kcal</td>
              <td className="px-4 py-2 border-b text-center">
                <button className="bg-green-500 text-white py-1 px-4 rounded-full hover:bg-green-600 transition">
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Currently Cooking Table */}
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
            <tr>
              <td className="px-4 py-2 border-b text-gray-700">Recipe 3</td>
              <td className="px-4 py-2 border-b text-gray-700">60 mins</td>
              <td className="px-4 py-2 border-b text-gray-700">500 kcal</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b text-gray-700">Recipe 4</td>
              <td className="px-4 py-2 border-b text-gray-700">20 mins</td>
              <td className="px-4 py-2 border-b text-gray-700">200 kcal</td>
            </tr>
          </tbody>
          {/* Total Row */}
          <tfoot>
            <tr className="font-semibold">
              <td className="px-4 py-2 border-t text-left">Recipes: {439857}</td>
              <td className="px-4 py-2 border-t text-left">{349857} Mins</td>
              <td className="px-4 py-2 border-t text-left">{239847} kcal</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SideBar;
