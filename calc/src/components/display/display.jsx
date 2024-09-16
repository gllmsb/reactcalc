import styles from './display.module.scss';

export const Display = ({ value }) => {
    return (
        <div className={styles.display}>{value}</div>
    );
};