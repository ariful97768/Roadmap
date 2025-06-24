import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./Animation - 1733452239295.json";

const Animation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);

    return (
        <div className=" flex justify-center items-center my-10 ">
            <div className=" h-80 w-80 md:w-[500px]">
                {View}
            </div>
        </div>
    )
}

export default Animation;