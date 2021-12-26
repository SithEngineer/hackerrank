document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn');
    function increment() {
        const value = button.innerHTML;
        button.innerHTML = (parseInt(value)+1);
    }
    button.addEventListener('click', increment);
});