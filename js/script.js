'use strict';
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);


};
const income = 'Фриланс', 
    mission = 100000, 
    period = 5;

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
const deposit = confirm('Есть ли у вас депозит в банке?');
 

const start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();

const showTypeOf = function(data) {
    console.log(data, typeof(data)); 
};
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);


addExpenses = addExpenses.toLowerCase();
    console.log(addExpenses.split(',')); 
const expenses = [];
const getExpensesMonth = function() {
    let sum = 0;
    for(let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов');
        sum += +prompt('Во сколько это обойдется?');
    }
    return sum;
};
const expensesAmount = getExpensesMonth();
    console.log('Расходы за месяц: ' + expensesAmount);


function getAccumulatedMonth(a, b) {
    return a - b;
}
const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);


function getTargetMonth(a, b) {
    Math.ceil(a / b);
    if(Math.ceil(a / b) > 0) {
        console.log('Cрок достижения цели в месяцах: ' + Math.ceil(a / b)); 
    } else {
        console.log('Цель не будет достигнута'); 
    }
    return;
}
    getTargetMonth(mission, accumulatedMonth);


const budgetDay = Math.floor(accumulatedMonth / 30);
    console.log('Бюджет на день: ' + budgetDay); 


function getStatusIncome() {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');

    } else if (budgetDay >= 600 && budgetDay <= 1200) {
        return ('У вас средний уровень дохода');

    } else if (budgetDay <= 600 && budgetDay > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');

    } else if (budgetDay <= 0) {
        return ('Что то пошло не так');
    } 
}
console.log(getStatusIncome()); 
