function Input(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        className={props.className}
      />
    </>
  );
}

export default Input;
