// LayoutWrapper.tsx
'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className={styles.layout}>
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
            <div className={styles.content}>
                <Navbar openSidebar={() => setSidebarOpen(true)} />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default LayoutWrapper;
