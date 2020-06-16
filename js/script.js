'use strict';

const income = 'Фриланс', 
    mission = 100000, 
    period = 5;
    
let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');
 

    let showTypeOf = function(data) {
        console.log(data, typeof(data)); 
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);


addExpenses = addExpenses.toLowerCase();
    console.log(addExpenses.split(',')); 


let expenses1 = prompt('Введите обязательную статью расходов?'), 
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'), 
    amount2 = +prompt('Во сколько это обойдется?');


function getExpensesMonth(a, b) {
    return a + b;
}   
    console.log('Расходы за месяц вызов ' + getExpensesMonth(amount1, amount2));


let amount = amount1 + amount2;


function getAccumulatedMonth(a, b) {
    return a - b;
}
let accumulatedMonth = getAccumulatedMonth(money, amount);


function getTargetMonth(a, b) {
    return Math.ceil(a / b);
}
    console.log('Cрок достижения цели в месяцах ' + getTargetMonth(mission, accumulatedMonth)); 

let timeToMission = Math.ceil(mission / accumulatedMonth);


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



