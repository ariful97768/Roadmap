import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";


const Aside = () => {
    const { registerWithEmail } = useContext(AuthContext)
    const btnClick = () => {
        console.log(registerWithEmail)
    }
    return (
        <div>
            <button onClick={btnClick} className='bg-red-300 p-5'>click me</button>
        </div>
    );
};

export default Aside;