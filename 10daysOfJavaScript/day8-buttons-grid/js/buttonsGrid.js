document.addEventListener('DOMContentLoaded', () => {
    // clockwise rotation with element ids
    const ids = ['btn1','btn2','btn3','btn6','btn9','btn8','btn7','btn4', 'btn1'];
    function rotate() {
        let transport = document.querySelector('#'+ids[0]).innerHTML;
        for (let index = 1; index < ids.length; index++) {
            const tmp = document.querySelector('#'+ids[index]).innerHTML;
            document.querySelector('#'+ids[index]).innerHTML = transport;
            transport = tmp;   
        }
    }
    const button = document.querySelector('#btn5');
    button.addEventListener('click', rotate);
});