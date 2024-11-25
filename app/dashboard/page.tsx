import styles from './Dashboard.module.scss';
import UserList from '../components/UserList';
import CreditCards from './CreditCards';
import TransactionCard from './TransactionCard';
import { BarChart, PieChart, LineChart } from '../components/Charts';

const DashboardPage = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>My Cards</h2>
          <div className={styles.cardsWrapper}>
            <CreditCards />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>Recent Transactions</h2>
          <TransactionCard />
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>Weekly Activity</h2>
          <BarChart />
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={styles.header}>Expense Statistics</h2>
          <PieChart />
        </div>
      </div>

      <div className={styles.thirdRow}>
        <div className={styles.quickTransfer}>
          <h2 className={styles.header}>Quick Transfer</h2>
          <UserList />
        </div>
        <div className={styles.balanceHistory}>
          <h2 className={styles.header}>Balance History</h2>
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
