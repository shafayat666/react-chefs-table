const CurrentlyCooking = () => {
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

            <tr>
              <td className="px-4 py-2 border-b text-gray-700">Recipe 1</td>
              <td className="px-4 py-2 border-b text-gray-700">60 mins</td>
              <td className="px-4 py-2 border-b text-gray-700">500 kcal</td>
            </tr>
          </tbody>
          
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

export default CurrentlyCooking;