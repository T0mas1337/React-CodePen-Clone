import React from 'react';
import '../Quiz/Quiz.css';
export default function Result({ countCorrectAnswers }) {
    return (
        <>
            <p>
                Ваш результат: <strong>{countCorrectAnswers}</strong>  !
            </p>
            <p>Thank you for playing!</p>
        </>
    );
}