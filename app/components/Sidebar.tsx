// Sidebar.tsx
'use client';

import styles from './Sidebar.module.scss';
import SidebarMenu from "@/app/components/SidebarMenu";

const Sidebar = ({
                     isOpen,
                     closeSidebar,
                 }: {
    isOpen: boolean;
    closeSidebar: () => void;
}) => {
    return (
        <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.header}>
                <img src="/icons/logo.svg" alt="Logo" className={styles.logo} />
                <h2 className={styles.brand}>Soar Task</h2>
                {/* Close button for mobile */}
                <button className={styles.closeButton} onClick={closeSidebar}>
                    &times;
                </button>
            </div>
            <SidebarMenu />
        </nav>
    );
};

export default Sidebar;
