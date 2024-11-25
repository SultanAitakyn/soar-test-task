'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SidebarMenu.module.scss';
import Image from "next/image";

const menuItems = [
    { icon: "/icons/home.svg", label: "Dashboard", link: "/dashboard" },
    { icon: "/icons/transactions.svg", label: "Transactions", link: "/transactions" },
    { icon: "/icons/accounts.svg", label: "Accounts", link: "/accounts" },
    { icon: "/icons/investments.svg", label: "Investments", link: "/investments" },
    { icon: "/icons/credit-cards.svg", label: "Credit Cards", link: "/credits" },
    { icon: "/icons/loans.svg", label: "Loans", link: "/loans" },
    { icon: "/icons/services.svg", label: "Services", link: "/services" },
    { icon: "/icons/privileges.svg", label: "My Privileges", link: "/privileges" },
    { icon: "/icons/settings.svg", label: "Setting", link: "/settings" },
];

const SidebarMenu = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.menu}>
            {menuItems.map((item) => (
                <Link href={item.link} className={styles.menuLink} key={item.label}>
                    <li
                        className={`${styles.menuItem} ${
                            pathname === item.link ? styles.active : ""
                        }`}
                        aria-current={pathname === item.link ? "page" : undefined}
                    >
                        <div className={styles.iconContainer}>
                            <Image
                                src={item.icon}
                                alt={`${item.label} icon`}
                                className={styles.icon}
                                width={25}
                                height={25}
                            />
                        </div>
                        <span className={styles.label}>{item.label}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default SidebarMenu;
