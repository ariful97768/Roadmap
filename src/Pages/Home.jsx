import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Spinner from "../assets/Spinner";
import SearchFilter from "./SearchFilter";

const Home = () => {

    const [refetch, setRefetch] = useState(false)
    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const { status } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://roadmap-server-woad.vercel.app?status=${status}`)
            .then(res => res.json())
            .then(res => {
                setData(res)
                setOriginalData(res)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }, [refetch, status])
    console.log(data);
    return (
        <section>
            <SearchFilter originalData={originalData} setData={setData} data={data} />
            {
                loader ? <Spinner /> : data.map(d => <FeatureCard key={d._id} data={d} refetch={refetch} setRefetch={setRefetch} />)
            }

        </section>
    );
};

export default Home;