import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  //load data
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => console.error("Fetch Error:", error));
  }, []);

  // send selected data
  const [items, setItems] = useState({
    wantToCookRecipe: [],
    currentlyCookingRecipe: []
  })

  const handleClick = (recipe, buttonId) => {
    const { recipe_name, preparing_time, calories, recipe_id } = recipe;
  
    setItems((prevState) => {
      const { wantToCookRecipe, currentlyCookingRecipe } = prevState;
  
      if (buttonId === 0) {
        const isRecipeExist = wantToCookRecipe.some((item) => item.recipe_id === recipe_id);
  
        if (!isRecipeExist) {
          return {
            ...prevState,
            wantToCookRecipe: [...wantToCookRecipe, { recipe_name, preparing_time, calories, recipe_id }]
          };
        } else {
          toast.warn("Item already exists in Want to Cook!", {
            position: "bottom-right"
          });
          return prevState;
        }
      } else if (buttonId === 1) {
        const isRecipeExist = currentlyCookingRecipe.some((item) => item.recipe_id === recipe_id);
  
        if (!isRecipeExist) {
          return {
            ...prevState,
            currentlyCookingRecipe: [...currentlyCookingRecipe, { recipe_name, preparing_time, calories, recipe_id }]
          };
        } else {
          toast.warn("Item already exists in Currently Cooking!", {
            position: "bottom-right"
          });
          return prevState;
        }
      }
  
      return prevState;
    });
  };

  return (
    <div className="p-6 mx-auto bg-white shadow-lg rounded-lg">
      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Recipes</h1>
        <p className="text-lg text-gray-600 leading-relaxed text-center w-2/3 mx-auto">
          Discover a variety of delicious recipes that are easy to make, fun to cook, and perfect for any occasion.
          Whether you&apos;re looking for quick meals, special dishes, or healthy options, we have something for everyone.
        </p>
      </div>
      <div className="flex space-x-6 mt-6">
        <div className="w-1/2 p-4 ">
          <div className="grid grid-cols-2 gap-6">
            {
              recipes.map((recipe, index) => <Recipe
                handleClick={handleClick}
                key={index}
                recipe={recipe}
              ></Recipe>)
            }
          </div>
        </div>
        <div className="w-1/2 p-4">
          <SideBar items={items} handleClick={handleClick} />
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipes;
