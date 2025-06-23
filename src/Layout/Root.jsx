import Navbar from '../Shared/Navbar';
import Aside from '../Shared/Aside';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#F2F8F1] min-h-screen pb-10'>
                <main className='flex pt-10 relative max-w-[1536px] mx-auto px-20'>
                    <aside className='max-w-1/4 fixed transform'>
                        <Aside />
                    </aside>
                    <section className='w-full ml-15 flex justify-end'>
                        <div className='max-w-3/4 pl-10 w-full'>
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