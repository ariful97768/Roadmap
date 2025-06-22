import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";

const Home = () => {
    const [loader, setLoader] = useState(true)
    const [refetch, setRefetch] = useState(false)
    const [data, setData] = useState([])

    const { status } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000?status=${status}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }, [refetch, status])
    console.log(data);
    return (
        <section className='border-2'>

            {
                data.map(d => <FeatureCard key={d._id} data={d} refetch={refetch} setRefetch={setRefetch} />)
            }

        </section>
    );
};

export default Home;