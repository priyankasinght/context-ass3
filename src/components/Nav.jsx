import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./Nav.css";

function Nav(props) {
    const { setIsLoggedIn, username } = useContext(AuthContext);
    return (
        <div className="nav">
            <div id="title">
                <h2>React Context</h2>
            </div>
            <div id="menu">
                <a href="home">Home</a>
                <a href="profile">Profile</a>
                <a href="products">Products</a>
                <a href="support">Support</a>
                <button
                    onClick={() => {
                        setIsLoggedIn(false);
                    }}
                >
                    Logout
                </button>
                <span className="nav__username">
                    <b>{username}</b>
                </span>
            </div>
        </div>
    );
}

export default Nav;
