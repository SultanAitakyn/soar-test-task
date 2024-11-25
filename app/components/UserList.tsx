'use client';
import styles from './UserList.module.scss';
import { useState } from 'react';

const users = [
  {
    name: 'Livia Bator',
    role: 'CEO',
    image: '/images/ceo.svg',
  },
  {
    name: 'Randy Press',
    role: 'Director',
    image: '/images/director.svg',
  },
  {
    name: 'Workman',
    role: 'Designer',
    image: '/images/workman.svg',
  },
  {
    name: 'Workman',
    role: 'Designer',
    image: '/images/workman_2.svg',
  },
  {
    name: 'Workman',
    role: 'Designer',
    image: '/images/workman_3.svg',
  },
];

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 3;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const startIndex = currentPage * usersPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  return (
    <div className={styles.container}>
      <div className={styles.usersContainer}>
        <div className={styles.users}>
          {displayedUsers.map((user, index) => (
            <div key={index} className={styles.userCard}>
              <div className={styles.userImage}>
                <img src={user.image} alt={user.name} />
              </div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{user.name}</span>
                <span className={styles.userRole}>{user.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.arrowContainer}>
          {canGoPrev && (
            <div
              className={`${styles.arrowButton} ${styles.arrowButtonPrev}`}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <img src="/icons/arrow.svg" alt="Previous" />
            </div>
          )}
          {canGoNext && (
            <div
              className={styles.arrowButton}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <img src="/icons/arrow.svg" alt="Next" />
            </div>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.writeAmount}>Write Amount</div>
        <div className={styles.amountContainer}>
          <input className={styles.amount} placeholder="525.50" />
          <button className={styles.sendButton}>
            <span className={styles.sendText}>Send</span>
            <img src="/icons/send.svg" alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserList;
