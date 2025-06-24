import { useLottie } from 'lottie-react';
import spinner from './spinner.json';
const Spinner = () => {
    const { View } = useLottie({
        animationData: spinner,
        loop: true,
        autoplay: true
    })
    return (
        <div className=" flex w-full py-10 mt-20 justify-center items-center my-10 ">
            <div className=" h-12 w-12 md:w-[100px]">
                {View}
            </div>
        </div>
    );
};

export default Spinner;