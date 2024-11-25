'use client';

import {ReactNode, useCallback, useState} from 'react';
import {Sidebar} from '../Sidebar';
import {Navbar} from '../Navbar';
import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = useCallback(() => setSidebarOpen(true), []);
    const closeSidebar = useCallback(() => setSidebarOpen(false), []);

    return (
        <div className={styles.layout}>
            <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <div className={styles.content}>
                <Navbar openSidebar={openSidebar} />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default LayoutWrapper;
