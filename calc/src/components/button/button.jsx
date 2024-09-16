import styles from './button.module.scss';

export const Button = ({ label, onClick, type = 'default' }) => {
    return (
      <button 
        className={`${styles.button} ${styles[type]}`} 
        onClick={onClick}
      >
        {label} 
      </button>
    );
  };