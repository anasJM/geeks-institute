import { useState } from "react";
import Output from "./Output";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [destination, setDestination] = useState("");
  const [nuts, setNuts] = useState(false);
  const [lactose, setLactose] = useState(false);
  const [vegan, setVegan] = useState(false);

  const firstNameState = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameState = (e) => {
    setLastName(e.target.value);
  };

  const ageState = (e) => {
    setAge(e.target.value);
  };

  const genderState = (e) => {
    setGender(e.target.value);
  };

  const destinationState = (e) => {
    setDestination(e.target.value);
  };

  const nutsState = (e) => {
    if (e.target.checked) {
      setNuts(true);
    } else {
      setNuts(false);
    }
  };

  const lactoseState = (e) => {
    if (e.target.checked) {
      setLactose(true);
    } else {
      setLactose(false);
    }
  };

  const veganState = (e) => {
    if (e.target.checked) {
      setVegan(true);
    } else {
      setVegan(false);
    }
  };

  return (
    <div>
      {/* form */}
      <form action="" name="user-information">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={firstNameState}
        />

        <br />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={lastNameState}
        />

        <br />
        <br />

        <input type="text" name="age" placeholder="Age" onChange={ageState} />

        <br />
        <br />

        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={genderState}
        />
        <label htmlFor="male">Male</label>

        <br />

        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={genderState}
        />
        <label htmlFor="female">Female</label>

        <br />
        <br />

        <label htmlFor="destination">Select your destination</label>
        <br />

        <select name="destination" id="destination" onChange={destinationState}>
          <option selected disabled>
            Choose your destination
          </option>
          <option value="morocco">Morocco</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
        </select>

        <br />
        <br />

        <p>Dietary restrictions:</p>

        <label>
          <input
            type="checkbox"
            name="nutsFree"
            id=""
            value="nuts"
            checked={nuts}
            onChange={nutsState}
          />
          Nuts free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            id="lactose"
            checked={lactose}
            onChange={lactoseState}
          />
          Lactose free free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="veganMeal"
            id="vegan"
            checked={vegan}
            onChange={veganState}
          />
          Vegan
        </label>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
      {/* output */}
      <div>
        <Output
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
          destination={destination}
          isNuts={nuts}
          isLactose={lactose}
          isVegan={vegan}
        />
      </div>
    </div>
  );
}

export default Form;
