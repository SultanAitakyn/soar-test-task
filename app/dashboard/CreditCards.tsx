// CreditCards.jsx
import styles from "./CreditCards.module.scss";

const cardData = [
    {
        balance: "$5,756",
        cardHolder: "Eddy Cusuma",
        validThru: "12/22",
        cardNumber: "3778 **** **** 1234",
        cardType: "mastercard",
    },
    {
        balance: "$2,500",
        cardHolder: "John Doe",
        validThru: "11/23",
        cardNumber: "1234 **** **** 5678",
        cardType: "mastercard",
    },
    // Add more card data if needed
];

const CreditCards = () => {
    return (
        <>
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className={`${styles.container} ${
                        (index + 1) % 2 === 0 ? styles.containerEven : ''
                    }`}
                >
                    <div className={styles.body}>
                        <div className={styles.balance}>
                            <div>
                                <div className={styles.field}>Balance</div>
                                <div className={`${styles.value} ${styles.balanceValue}`}>{card.balance}</div>
                            </div>
                            <img src="/icons/chip.svg" alt="chip" className={styles.chipIcon}/>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.cardholder}>
                                <div className={styles.field}>CARD HOLDER</div>
                                <div className={styles.value}>{card.cardHolder}</div>
                            </div>

                            <div>
                                <div className={styles.field}>VALID THRU</div>
                                <div className={styles.value}>{card.validThru}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.numbers}>{card.cardNumber}</div>
                        <img src={`/icons/${card.cardType}.svg`} alt={card.cardType} className={styles.cardType}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CreditCards;
