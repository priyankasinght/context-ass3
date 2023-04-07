import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./Login.css";

function Login(props) {
    const { handleAuthentication } = useContext(AuthContext);
    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            (user.name === "priyanka" && user.password === "priyanka@123") ||
            (user.name === "admin" && user.password === "admin@123")
        ) {
            handleAuthentication(user.name);
        } else {
            alert("Enter Proper Credentials");
        }
    };
    return (
        <div className="login">
            <h3>Login Form </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="User Name"
                        onChange={(e) => {
                            setUser({
                                ...user,
                                name: e.target.value,
                            });
                        }}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value,
                            });
                        }}
                    />
                </div>
                <br />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
