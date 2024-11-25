import styles from './Navbar.module.scss';
import Search from "../components/Search";

const Navbar = () => (
    <div className={styles.navbar}>
        <div className={styles.pageTitle}>
            Overview
        </div>

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

            <img src="/images/avatar.svg" alt="Profile" className={styles.avatar}/>
        </div>
    </div>
);

export default Navbar;
