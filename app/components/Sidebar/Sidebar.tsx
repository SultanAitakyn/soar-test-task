'use client';

import styles from './Sidebar.module.scss';
import SidebarMenu from './SidebarMenu';
import clsx from 'clsx';
import Image from 'next/image';

const Sidebar = ({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) => {
  return (
    <nav
      className={clsx(styles.sidebar, { [styles.open]: isOpen })}
      aria-label="Sidebar Navigation"
    >
      <div className={styles.header}>
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          className={styles.logo}
          width={35}
          height={35}
        />
        <h2 className={styles.brand}>Soar Task</h2>
        <button
          className={styles.closeButton}
          onClick={closeSidebar}
          aria-label="Close Sidebar"
        >
          &times;
        </button>
      </div>
      <SidebarMenu />
    </nav>
  );
};

export default Sidebar;
