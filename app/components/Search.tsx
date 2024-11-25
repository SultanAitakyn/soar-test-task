import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <img src="/icons/search.svg" alt="search" className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search for something"
        className={styles.searchInput}
      />
    </div>
  );
};

export default Search;
