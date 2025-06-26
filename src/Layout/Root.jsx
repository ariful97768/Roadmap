import Navbar from '../Shared/Navbar';
import Aside from '../Shared/Aside';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#f8f8f4] min-h-[90vh]'>
                <main className='flex py-10 flex-col sm:relative max-w-[1536px] mx-auto px-5 sm:px-20'>
                    <aside className='w-full lg:max-w-2/6 xl:max-w-1/4 lg:fixed sm:mb-5 lg:mb-0 lg:mt-6 transform'>
                        <Aside />
                    </aside>
                    <section className='w-full mt-10 lg:ml-15 flex justify-end'>
                        <div className=' lg:max-w-4/6 xl:max-w-3/4 lg:pl-10 lg:pr-14 w-full'>
                            <Outlet />
                        </div>
                    </section>
                </main>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Root;