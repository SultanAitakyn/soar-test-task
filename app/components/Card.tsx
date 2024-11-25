import styles from './Card.module.scss';

const Card = ({ title, amount, description }: { title: string; amount: string; description: string }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p className={styles.amount}>{amount}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default Card;
