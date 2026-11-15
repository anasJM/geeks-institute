import { useEffect, useState } from "react";
import Input from "./Input";

function Exercise1() {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [phone, setPhone] = useState(0);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  //   DOM elements
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const phoneInput = document.getElementById("phone");
  const emailInput = document.getElementById("email");

  //   first name useEffect
  useEffect(() => {
    if (firstName && isNaN(firstName)) {
      setIsFirstNameValid(true);
    } else {
      setIsFirstNameValid(false);
    }
  }, [firstName]);

  //   last name useEffect
  useEffect(() => {
    if (lastName && isNaN(lastName)) {
      setIsLastNameValid(true);
    } else {
      setIsLastNameValid(false);
    }
  }, [lastName]);

  //   phone useEffect
  useEffect(() => {
    const regex = /^0[67]\d{8}$/;
    if (phone && regex.test(phone)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  }, [phone]);

  //   email useEffect
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && regex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [email]);

  return (
    <>
      <form name="user-info-form">
        <Input
          type="text"
          id="firstName"
          label="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className={isFirstNameValid ? "input-valid" : "input-not-valid"}
        />
        {!firstName
          ? "first name is required"
          : !isNaN(firstName)
            ? "first name can't be number"
            : ""}
        {}
        <br />
        <br />
        <Input
          type="text"
          id="lastName"
          label="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          className={isLastNameValid ? "input-valid" : "input-not-valid"}
        />
        {!lastName
          ? "last name is required"
          : !isNaN(lastName)
            ? "last name can't be number"
            : ""}
        <br />
        <br />
        <Input
          type="number"
          id="phone"
          label="Phone Number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className={isPhoneValid ? "input-valid" : "input-not-valid"}
        />
        {!phone
          ? "Phone Number is required"
          : isPhoneValid == false
            ? "Phone is not valid"
            : ""}
        <br />
        <br />
        <Input
          type="email"
          id="email"
          label="Email Adress"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={isEmailValid ? "input-valid" : "input-not-valid"}
        />
        {!email
          ? "Email is required"
          : isEmailValid == false
            ? "Email is not valid"
            : ""}
        <br />
        <br />
      </form>
    </>
  );
}

export default Exercise1;
