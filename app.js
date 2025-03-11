
document.addEventListener('DOMContentLoaded', () => {
    
    const firstNumber = document.getElementById('firstnum');
    const secondNumber = document.getElementById('secondnum');
    const operator = document.getElementById('operator');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(firstNumber.value);
        const num2 = parseFloat(secondNumber.value);
        let result;

        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Please enter valid numbers";
            return;
        }

       
        switch(operator.value) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultDiv.textContent = "Cannot divide by zero!";
                    return;
                }
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operator';
        }

     
        resultDiv.textContent = `${num1} ${operator.value} ${num2} = ${result}`;
    });
});