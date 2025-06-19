import Navbar from '../Shared/Navbar';
import Aside from '../Shared/Aside';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <main className='flex relative gap-10 max-w-[1536px] mx-auto px-10'>
                <aside className='max-w-1/4 fixed transform'>
                    <Aside />
                </aside>
                <section className='w-full border-2 flex justify-end'>
                    <div className='max-w-3/4 pl-10 w-full'>
                        <Outlet />
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Root;