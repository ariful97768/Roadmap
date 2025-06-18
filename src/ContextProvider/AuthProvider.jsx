import { createContext } from "react";
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const registerWithEmail = (email, password) => {
        console.log('btn clicked');
    }

    const authInfo = {
        registerWithEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;