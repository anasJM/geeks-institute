import { useState } from "react";

function Exercise1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setPhone(data.phone);
    setEmail(data.email);
  };

  if (isFormSubmit === false) {
    return (
      <>
        <h1>Welcome!</h1>
        <form action="" name="user-info-form" onSubmit={onSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
          <br />
          <br />
          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" name="phone" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }

  return (
    <>
      <p>
        {firstName}, {lastName}
      </p>
      <p>
        {phone} | {email}
      </p>
      <button onClick={() => setIsFormSubmit(false)}>Reset</button>
    </>
  );
}

export default Exercise1;
