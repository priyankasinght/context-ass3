import { useContext } from "react";
import { AuthContext } from "./components/AuthContext";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div>
      {isloggedin ? (
        <div>
          <Nav />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;