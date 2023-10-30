import "./button.css";

const Button = ({ type, title, onClick, disable }) => {
  const buttonClass =
    type === "add"
      ? "add"
      : type === "remove"
      ? "remove"
      : type === "checkout"
      ? "checkout"
      : "";

  return (
    <button
      className={`btn ${buttonClass} ${disable && 'disabled'}`}
      onClick={onClick}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default Button;
