import { Button } from "../button/button";
import styles from './buttonPanel.module.scss';


export const ButtonPanel = ({ onNumberClick, onOperatorClick, onClear, onEqual}) => {
    return (
        <div className={styles.buttonPanel}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
            return <Button key={num} label={num} onClick={() => onNumberClick(num)} />
            })}

            {['+', '-', '*', '/'].map((operator) => {
            return <Button key={operator} label={operator} onClick={() => onOperatorClick(operator)} />
            })}

            <Button label="C" onClick={onClear} type="clear" />
            <Button label="=" onClick={onEqual} type="equal" />
        </div>
    );
};