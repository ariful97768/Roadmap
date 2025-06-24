import { createContext, useState } from "react";
export const AuthContext = createContext()
import auth from '../../firebase.config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
const provider = new GoogleAuthProvider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) // loading is for user state management
    const registerWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name, photoURL = `https://i.pravatar.cc/150?img=${user?.uid}`) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                setUser({ ...auth.currentUser, displayName: name, photoURL: photoURL })
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
                setLoading(false)
            });
    }


    useState(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])
    const [status, setStatus] = useState('all')

    const authInfo = {
        registerWithEmail,
        loginWithEmail,
        setUser,
        loginWithGoogle,
        logOut,
        user,
        loading,
        setStatus,
        status,
        updateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;