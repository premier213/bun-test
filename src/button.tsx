function Button({ onClick, label }) {
  return (
    <button onClick={onClick} data-testid="button">
      {label}
    </button>
  );
}

export default Button;
