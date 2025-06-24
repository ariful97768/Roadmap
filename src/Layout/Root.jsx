import Navbar from '../Shared/Navbar';
import Aside from '../Shared/Aside';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#f8f8f4] min-h-[90vh]'>
                <main className='flex pt-10 relative max-w-[1536px] mx-auto px-20'>
                    <aside className='max-w-1/4 fixed mt-6 transform'>
                        <Aside />
                    </aside>
                    <section className='w-full ml-15 flex justify-end'>
                        <div className='max-w-3/4 pl-10 w-full  pb-10'>
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