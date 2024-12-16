import PropTypes from 'prop-types';
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
import WantToCook from "../WantToCook/WantToCook";

const SideBar = ({items}) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <WantToCook items={items}></WantToCook>

      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
};



SideBar.propTypes = {
  items: PropTypes.array
};

export default SideBar;
