import { FC } from 'react';
import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';
import s from './Layout.module.css';
import { useUI } from '@components/ui/Context';
import { ApiProvider } from '@framework';

const Layout: FC  = ({ children })=> {

    const { isSidebarOpen, closeSidebar } = useUI();
    return(

        <ApiProvider>
            <div className={s.root}>
                <Navbar/>
                <Sidebar
                    onClose={closeSidebar} 
                    isOpen={isSidebarOpen}
                >
                    <CartSidebar/>
                </Sidebar>
                <main className ='fit'>
                    { children }
                </main>
                <Footer/>
            </div>
        </ApiProvider>
    );

};

export default Layout;