import styles from './Sidebar.module.scss';
import SidebarMenu from "@/app/components/SidebarMenu";

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.header}>
                <img src="/icons/logo.svg" alt="Logo" className={styles.logo}/>
                <h2 className={styles.brand}>Soar Task</h2>
            </div>

            <SidebarMenu />
        </nav>
    );
};

export default Sidebar;
