import { useContext, useEffect } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../assets/googleLogo.png';

const Register = () => {
    const { setUser, registerWithEmail, loading, user, loginWithGoogle, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!loading && user) {
            navigate('/')
        }
    }, [loading, user])

    const handleRegister = (e) => {
        e.preventDefault()
        if (e.target.email.value === '' || e.target.password.value === '') return alert('Please fill all fields')
        if (e.target.password.value.length < 6) return alert('Password must be at least 6 characters long')
        registerWithEmail(e.target.email.value, e.target.password.value)
            .then(res => {
                setUser(res.user)
                updateUser(e.target.name.value)
                    .then(res => {
                        console.log(res);
                        alert('Registration successful')
                        navigate('/')
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(res => setUser(res.user))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleRegister}>
            <div className='flex flex-col gap-2 max-w-max px-5 border-2 shadow-2xl border-b-7 border-r-10 rounded-2xl py-10 mx-auto mt-20'>
                <div className='text-center mb-7 space-y-2'>
                    <h3 className='text-3xl font-black'>Sign <span className='text-yellow-400'>In</span></h3>
                    <p>Login to explore our amazing opportunities</p>
                </div>
                <label htmlFor="name" className="flex flex-col">
                    Full Name
                    <input placeholder="John Doe" className='border-2 shadow-lg border-b-3 border-r-4 min-w-xs px-3 py-2 rounded-lg outline-none border-gray-700' type="text" name="name" id="name" />
                </label>
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
                <p className='text-center text-sm mt-3'>Don't have an account? <Link to={'/login'} className='font-bold text-yellow-400 cursor-pointer'>Login</Link></p>
            </div>
        </form>
    );
};

export default Register;