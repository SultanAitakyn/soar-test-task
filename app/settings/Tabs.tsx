'use client';

import { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import styles from './Tabs.module.scss';

const tabs = ['Edit Profile', 'Preferences', 'Security'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Edit Profile':
        return <EditProfileForm />;
      case 'Preferences':
        return <div className={styles.soon}>Coming soon!</div>;
      case 'Security':
        return <div className={styles.soon}>Coming soon!</div>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabLayout}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default Tabs;
