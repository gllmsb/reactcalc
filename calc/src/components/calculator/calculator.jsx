import { useState } from "react";
import styles from './calculator.module.scss';
import { Display } from "../display/display";
import { ButtonPanel } from "../buttonPanel/buttonPanel";


export const Calculator = () => {
    
    const [displayValue, setDisplayValue] = useState('0'); 
    const [currentInput, setCurrentInput] = useState('');
    const [activeOperator, setActiveOperator] = useState(null);

    const handleNumberClick = (num) => {
        setCurrentInput((prev) => prev === '0' ? num.toString() : prev + num);
        setDisplayValue((prev) => prev === '0' ? num.toString() : prev + num);
    };

    const handleOperatorClick = (operator) => {
        setActiveOperator(operator);
        setCurrentInput((prev) => prev + ' ' + operator + ' ');
        setDisplayValue((prev) => prev + ' ' + operator + ' ');
    };

    const handleClear = () => {
        setActiveOperator(null);
        setCurrentInput('');
        setDisplayValue('0');
    };

    const handleEqual = () => {
        try {
        const result = eval(currentInput);
        setDisplayValue(result.toString());
        setCurrentInput(result.toString());
        } catch (error) {
        setDisplayValue('Error');
        }
        setActiveOperator(null);
    };

    return (
        <div className={styles.calculator}>
        <Display value={displayValue} />
        <ButtonPanel
            onNumberClick={handleNumberClick}
            onOperatorClick={handleOperatorClick}
            onClear={handleClear}
            onEqual={handleEqual}
            activeOperator={activeOperator}
        />
        </div>
    );
};