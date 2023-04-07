import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProvider({ children }) {
const [isloggedin, setIsLoggedIn] = useState(false);
const [username, setUsername] = useState('');
const handleAuthentication = (name) => {
setUsername(name);
setIsLoggedIn(true);
}
return (
<AuthContext.Provider value={{ isloggedin, setIsLoggedIn, username, handleAuthentication }}>
{children}
</AuthContext.Provider>
);
}

export default CustomProvider;