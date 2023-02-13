const btn = document.querySelector("#btn");
const num = document.querySelector("#num");
const res = document.querySelector("#result");

const colors = {
    getInvalid() {
        if (res.classList.contains('odd') || res.classList.contains('even'))
            res.classList.remove('odd');
            res.classList.remove('even');
            res.classList.add('invalid');
    },
    getEven() {
        if (res.classList.contains('odd') || res.classList.contains('invalid'))
            res.classList.remove('odd');
            res.classList.remove('invalid');
            res.classList.add('even');
    },
    getOdd() {
        if (res.classList.contains('invalid') || res.classList.contains('even'))
            res.classList.remove('invalid');
            res.classList.remove('even');
            res.classList.add('odd');
    }
}

btn.addEventListener('click', () => {
    if (num.value.length < 1) {
        colors.getInvalid();
        res.innerHTML = "Please enter a number";
    } else if (num.value.includes(' ')) {
        colors.getInvalid();
        res.innerHTML = "Do not include the space";
    } else if (num.value % 2 == 0) {
        colors.getEven();
        res.innerHTML = "Even number";
    } else if (num.value % 2 == 1) {
        colors.getOdd();
        res.innerHTML = "Odd number";
    } else {
        colors.getInvalid();
        res.innerHTML = "Invalid number";
    }
    
    num.value = '';
});
