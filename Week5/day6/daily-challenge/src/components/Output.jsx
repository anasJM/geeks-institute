function Output(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    isNuts,
    isLactose,
    isVegan,
  } = props;

  return (
    <>
      <h1>Entered informations:</h1>
      <p>
        Your name: {firstName} {lastName}
      </p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Your dietary restrictions:</p>
      <ul>
        <li>Nuts free: {isNuts ? "yes" : "No"}</li>
        <li>Lactose free: {isLactose ? "yes" : "No"}</li>
        <li>Vegan meal: {isVegan ? "yes" : "No"}</li>
      </ul>
    </>
  );
}

export default Output;
