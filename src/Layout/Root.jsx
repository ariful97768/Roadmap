import Navbar from '../Shared/Navbar';
import Aside from '../Shared/Aside';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <>
            <Navbar />
            <main>
                <aside>
                    <Aside />
                </aside>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;