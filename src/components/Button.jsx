import PropTypes from "prop-types";

export const Button = ({ handleClick, description }) => {
  return (
    <button
      type="button"
      className="h-12 w-12 flex items-center justify-center font-bold text-white text-2xl rounded-full bg-eden hover:ring-2 hover:ring-offset-2"
      onClick={handleClick}
    >
      {description}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
