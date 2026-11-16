// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";

import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary ";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  const fetchWebhook = async () => {
    try {
      const response = await fetch(
        "https://webhook.site/21f06033-5088-43a3-bbb3-abbf21cce4e9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        },
      );
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="me-2 bg-primary text-white px-4 py-2 rounded-1 text-decoration-none fw-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className="me-2 bg-primary text-white px-4 py-2 rounded-1 text-decoration-none fw-semibold"
            >
              Profile
            </NavLink>
            <NavLink
              to="/shop"
              className="me-2 bg-primary text-white px-4 py-2 rounded-1 text-decoration-none fw-semibold"
            >
              Shop
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
      <br />
      <br />
      <br />
      {/* EX2 */}
      <h3>Exercise 2</h3>
      <PostList />
      {/* EX3 */}
      <h3>Exercise 3</h3>
      <Example1 />
      <Example2 />
      <Example3 />
      {/* EX4 */}
      <h3>Exercise 4</h3>
      <button onClick={fetchWebhook}>Click to POST data</button>
    </>
  );
}

export default App;
