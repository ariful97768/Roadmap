import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Home = () => {
    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }, [])
    return (
        <section className='border-2'>

            {
                data.map(d => <FeatureCard key={d._id} data={d} />)
            }

        </section>
    );
};

export default Home;