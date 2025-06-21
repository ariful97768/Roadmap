import { useContext, useEffect } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { loginWithEmail, loginWithGoogle, user, loading, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && user) {
            navigate('/')
        }
    }, [loading, user])

    const handleLogin = (e) => {
        e.preventDefault()
        loginWithEmail(e.target.email.value, e.target.password.value)
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }
    const handleGoogle = () => {
        loginWithGoogle()
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto max-w-max">
            <div className="text-3xl font-semibold pt-20">Log in</div>
            <form onSubmit={handleLogin} className='flex flex-col gap-2 py-10 max-w-max'>
                <label htmlFor="name" className="flex flex-col gap-2">
                    name
                    <input id="name" placeholder="Full name" className='border min-w-xs px-3 py-2 rounded-md outline-none border-gray-700' type="name" name="name" />
                </label>
                <label htmlFor="email" className="flex flex-col gap-2">
                    email
                    <input placeholder="Email address" className='border min-w-xs px-3 py-2 rounded-md outline-none border-gray-700' type="email" name="email" id="email" />
                </label>
                <label htmlFor="password" className="flex flex-col gap-2">
                    Password
                    <input placeholder="Password" className='border min-w-xs px-3 py-2 rounded-md outline-none border-gray-700' type="password" name="password" id="password" />
                </label>
                <div onClick={handleGoogle}>Google</div>
                <button className="">Submit</button>
            </form>
        </div>
    );
};

export default Login;