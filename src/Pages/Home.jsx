import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Spinner from "../assets/Spinner";

const Home = () => {

    const [refetch, setRefetch] = useState(false)
    const [data, setData] = useState([])

    const { status, loader, setLoader } = useContext(AuthContext)

    useEffect(() => {
        setLoader(true)
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
    return (
        <section>

            {
                loader ? <Spinner /> : data.map(d => <FeatureCard key={d._id} data={d} refetch={refetch} setRefetch={setRefetch} />)
            }

        </section>
    );
};

export default Home;