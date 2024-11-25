import styles from './Dashboard.module.scss';
import Chart from '../components/Chart';
import UserList from '../components/UserList';
import CreditCards from "./CreditCards";
import TransactionCard from "./TransactionCard";

const DashboardPage = () => {
    return (
        <>
            <div className={styles.dashboard}>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.header}>My Cards</h2>
                    <div className={styles.cardsWrapper}>
                        <CreditCards/>
                    </div>
                </div>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.header}>Recent Transactions</h2>
                    <TransactionCard/>
                </div>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.header}>Weekly Activity</h2>
                    <Chart type="bar"/>
                </div>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.header}>Expense Statistics</h2>
                    <Chart type="pie"/>
                </div>
            </div>

            <div className={styles.thirdRow}>
                <div className={styles.quickTransfer}>
                    <h2 className={styles.header}>Quick Transfer</h2>
                    <UserList/>
                </div>
                <div className={styles.balanceHistory}>
                    <h2 className={styles.header}>Balance History</h2>
                    <Chart type="line"/>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
