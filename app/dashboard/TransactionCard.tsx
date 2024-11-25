import styles from './Transactions.module.scss';

const transactions = [
  {
    id: 1,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    amountStyle: styles.negative,
    iconBackground: styles.iconBackgroundCard,
    icon: '/icons/cards.svg',
  },
  {
    id: 2,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    amountStyle: styles.positive,
    iconBackground: styles.iconBackgroundPaypal,
    icon: '/icons/paypal.svg',
  },
  {
    id: 3,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    amountStyle: styles.positive,
    iconBackground: styles.iconBackgroundUser,
    icon: '/icons/usd.svg',
  },
];

const TransactionCard = () => {
  return (
    <div className={styles.transactionList}>
      {transactions.map((transaction) => (
        <div key={transaction.id} className={styles.transactionItem}>
          <div
            className={`${styles.iconContainer} ${transaction.iconBackground}`}
          >
            <img
              src={transaction.icon}
              alt={`${transaction.title} icon`}
              className={styles.icon}
            />
          </div>
          <div className={styles.transactionDetails}>
            <span className={styles.title}>{transaction.title}</span>
            <span className={styles.date}>{transaction.date}</span>
          </div>
          <div className={styles.amountContainer}>
            <span className={`${styles.amount} ${transaction.amountStyle}`}>
              {transaction.amount}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
