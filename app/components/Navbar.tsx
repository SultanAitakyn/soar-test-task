// Navbar.tsx
'use client';

import styles from './Navbar.module.scss';
import Search from "../components/Search";
import {usePathname} from "next/navigation";

const Navbar = ({openSidebar}: { openSidebar: () => void }) => {
    const pathname = usePathname();
    const pathTitleMap: { [key: string]: string } = {
        '/dashboard': 'Overview',
        '/settings': 'Setting',
    };

    const pageTitle = pathTitleMap[pathname] || 'Mock page';

    return (
        <div className={styles.navbar}>
            <div className={styles.topRow}>
                <button className={styles.burgerButton} onClick={openSidebar}>
                    <img src="/icons/menu.svg" alt="Menu"/>
                </button>
                <div className={styles.pageTitle}>{pageTitle}</div>
                <div className={styles.navbarRight}>
                    <div className={styles.actions}>
                        <Search/>

                        <div className={styles.buttonContainer}>
                            <div className={styles.iconWrapper}>
                                <img src="/icons/settings_outlined.svg" alt="Settings Icon" className={styles.icon}/>
                            </div>
                        </div>

                        <div className={styles.buttonContainer}>
                            <div className={styles.iconWrapper}>
                                <img src="/icons/notification.svg" alt="Notification Icon" className={styles.icon}/>
                            </div>
                        </div>
                    </div>
                    <img src="/images/avatar.svg" alt="Profile" className={styles.avatar}/>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <Search/>
            </div>
        </div>
    )
}

export default Navbar;
