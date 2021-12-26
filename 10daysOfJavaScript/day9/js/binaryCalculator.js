document.addEventListener('DOMContentLoaded', () => {
    function press0() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '0';
    }
    document.querySelector('#btn0').addEventListener('click', press0);

    function press1() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '1';
    }
    document.querySelector('#btn1').addEventListener('click', press1);

    function pressClr() {
        document.querySelector('#res').innerHTML = '';
    }
    document.querySelector('#btnClr').addEventListener('click', pressClr);
    
    function pressSum() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '+';
    }
    document.querySelector('#btnSum').addEventListener('click', pressSum);
    
    function pressSub() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '-';
    }
    document.querySelector('#btnSub').addEventListener('click', pressSub);

    function pressMul() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '*';
    }
    document.querySelector('#btnMul').addEventListener('click', pressMul);

    function pressDiv() {
        const currentState = document.querySelector('#res').innerHTML;
        document.querySelector('#res').innerHTML = currentState + '/';
    }
    document.querySelector('#btnDiv').addEventListener('click', pressDiv);

    function pressEql() {
        const currentState = document.querySelector('#res').innerHTML;
        const operands = currentState.match(/[01]+/g);
        const operator = currentState.match(/[+\-*/]{1}/g);
    
        const operand1 = parseInt(operands[0],2);
        const operand2 = parseInt(operands[1],2);

        let result = 0;
        switch(operator[0]){
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default: 
                console.log("operator not found");
        }

        document.querySelector('#res').innerHTML = result.toString(2);

        console.log(`${operand1} ${operator} ${operand2} = ${result}`);
    }
    document.querySelector('#btnEql').addEventListener('click', pressEql);
});