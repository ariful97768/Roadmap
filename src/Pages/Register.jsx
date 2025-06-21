import { useContext, useEffect } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { setUser, registerWithEmail, loading, user, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!loading && user) {
            navigate('/')
        }
    }, [loading, user])

    const handleRegister = (e) => {
        e.preventDefault()
        registerWithEmail(e.target.email.value, e.target.password.value)
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleRegister}>
            <div className='flex flex-col gap-2 py-20 max-w-max'>
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
            </div>
        </form>
    );
};

export default Register;