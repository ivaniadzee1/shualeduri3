const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const reset = document.getElementById('btn6')
const bill = document.getElementById('bill')
const custom = document.getElementById('custom')
const people = document.getElementById('people')
const zero = document.getElementById('zero')
const tip = document.getElementById('tip-amount')
const total = document.getElementById('total')
const peopleDiv = document.getElementById('people-div')
const billDiv = document.getElementById('bill-div')
function calc(r) {
    let tip1 = (((bill.value * r) / 100) / people.value)
    tip.innerHTML = "$" + Number.parseFloat(tip1).toFixed(2);
    total.innerHTML = "$" + Number.parseFloat(((bill.value / people.value) + tip1)).toFixed(2)
}

function checkZero() {
    if (people.value == "" || people.value == 0) {
        zero.innerHTML = "Can't be zero"
        peopleDiv.style.border = "2px solid red"
    } else {
        zero.innerHTML = ""
        peopleDiv.style.border = "none"
    }
}

bill.addEventListener('focus', (e) => {
    billDiv.style.border = "2px solid var(--lightgreen)"
})
bill.addEventListener('blur', (e) => {
    billDiv.style.border = "none"
})

people.addEventListener('focus', (e) => {
    peopleDiv.style.border = "2px solid var(--lightgreen)"
})
people.addEventListener('blur', (e) => {
    peopleDiv.style.border = "none"
})

btn1.addEventListener('click', () => {
    checkZero()
    calc(5)
})
btn2.addEventListener('click', () => {
    checkZero()
    calc(10)
})
btn3.addEventListener('click', () => {
    checkZero()
    calc(15)
})
btn4.addEventListener('click', () => {
    checkZero()
    calc(25)
})
btn5.addEventListener('click', () => {
    checkZero()
    calc(50)
})
custom.addEventListener('input', () => {
    checkZero()
    calc(custom.value)
})

reset.addEventListener('click', () => {
    bill.value = ""
    people.value = ""
    tip.innerHTML = "$ 0.00"
    total.innerHTML = "$ 0.00"
})