import PropTypes from 'prop-types';
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCook from "../WantToCook/WantToCook";


const SideBar = ({items, handleClick}) => {
  const { wantToCookRecipe,  currentlyCookingRecipe } = items

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <WantToCook items={wantToCookRecipe} handleClick={handleClick}></WantToCook>

      <CurrentlyCooking recipes={currentlyCookingRecipe}></CurrentlyCooking>
    </div>
  );
};



SideBar.propTypes = {
  items: PropTypes.object,
  handleClick: PropTypes.func
};

export default SideBar;
