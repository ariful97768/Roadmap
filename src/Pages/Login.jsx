import { useContext, useEffect } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from '../assets/googleLogo.png';
import Swal from "sweetalert2";

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
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    title: 'Registration Successful',
                    text: 'Welcome to IdeaNest!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error',
                    text: 'Something went wrong, please try again later. Open console for more details.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
                console.log(err)
            })
    }
    const handleGoogle = () => {
        loginWithGoogle()
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    title: 'Registration Successful',
                    text: 'Welcome to IdeaNest!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error',
                    text: 'Something went wrong, please try again later. Open console for more details.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                })
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleLogin}>
            <div className='flex flex-col gap-2 max-w-max px-5 border-2 shadow-2xl border-b-7 border-r-10 rounded-2xl py-10 mx-auto mt-20'>
                <div className='text-center mb-7 space-y-2'>
                    <h3 className='text-3xl font-black'>Log <span className='text-yellow-400'>In</span></h3>
                    <p>Login to explore our amazing opportunities</p>
                </div>
                <label htmlFor="email" className="flex flex-col">
                    Email Address
                    <input placeholder="you@email.com" className='border-2 shadow-lg border-b-3 border-r-4 min-w-xs px-3 py-2 rounded-lg outline-none border-gray-700' type="email" name="email" id="email" />
                </label>
                <label htmlFor="password" className="flex flex-col">
                    Password
                    <input placeholder="Password" className='border-2 shadow-lg border-b-3 border-r-4 min-w-xs px-3 py-2 rounded-lg outline-none border-gray-700' type="password" name="password" id="password" />
                </label>
                <button className="border-2 cursor-pointer active:scale-95 transform duration-300 mt-5 shadow-lg border-b-3 border-r-4 rounded-lg py-2 font-bold bg-yellow-300">Sign in</button>
                <div className='flex items-center my-5 gap-2'>
                    <hr className='w-full border' />
                    OR
                    <hr className='w-full border' />
                </div>
                <div className='border-2 shadow-lg border-b-3 border-r-4 rounded-lg py-2 font-bold bg-amber-50/30 cursor-pointer active:scale-95 transform duration-300 text-center flex items-center justify-center gap-3' onClick={handleGoogle}><img className='w-5 h-5' src={googleLogo} alt="Logo" /> Google</div>
                <p className='text-center text-sm mt-3'>Don't have an account? <Link to={'/register'} className='font-bold text-yellow-400 cursor-pointer'>Register</Link></p>
            </div>
        </form>
    );
};

export default Login;